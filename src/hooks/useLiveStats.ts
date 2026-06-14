'use client';

import { useState, useEffect, useRef } from 'react';

interface LiveStats {
  liveUsers: number;
  totalVisitors: number;
  activePages: Record<string, number>;
}

export function useLiveStats(token?: string | null) {
  const [stats, setStats] = useState<LiveStats>({
    liveUsers: 0,
    totalVisitors: 0,
    activePages: {}
  });
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const connect = () => {
    if (!token) return;

    try {
      const wsUrl = process.env.NODE_ENV === 'production' 
        ? 'wss://tifficaapp-1.onrender.com/ws/admin-stats'
        : 'ws://localhost:5001/ws/admin-stats';
      
      console.log('🔌 Connecting to admin stats WebSocket...');
      
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('✅ Admin stats WebSocket connected');
        setConnected(true);
        
        // Send authentication
        ws.send(JSON.stringify({
          type: 'auth',
          token: token
        }));
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          switch (data.type) {
            case 'auth_success':
              console.log('✅ Admin stats WebSocket authenticated');
              break;
              
            case 'live_stats':
              setStats({
                liveUsers: data.liveUsers || 0,
                totalVisitors: data.totalVisitors || 0,
                activePages: data.activePages || {}
              });
              break;
              
            case 'user_joined':
              setStats(prev => ({
                ...prev,
                liveUsers: prev.liveUsers + 1,
                totalVisitors: prev.totalVisitors + 1
              }));
              break;
              
            case 'user_left':
              setStats(prev => ({
                ...prev,
                liveUsers: Math.max(0, prev.liveUsers - 1)
              }));
              break;
              
            case 'auth_error':
              console.error('❌ Admin stats WebSocket auth failed:', data.message);
              break;
              
            default:
              console.log('📊 Stats update:', data);
          }
        } catch (err) {
          console.error('❌ Error parsing WebSocket message:', err);
        }
      };

      ws.onclose = () => {
        console.log('🔌 Admin stats WebSocket disconnected');
        setConnected(false);
        
        // Auto-reconnect after 5 seconds
        reconnectTimeoutRef.current = setTimeout(connect, 5000);
      };

      ws.onerror = (error) => {
        console.error('❌ Admin stats WebSocket error:', error);
        setConnected(false);
      };

    } catch (error) {
      console.error('❌ Failed to create WebSocket connection:', error);
    }
  };

  useEffect(() => {
    if (token) {
      connect();
    }

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [token]);

  return {
    stats,
    connected,
    reconnect: connect
  };
}