'use client';

import { X, Download, Smartphone } from 'lucide-react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export function AppDownloadModal({ isOpen, onClose, onDownload }: AppDownloadModalProps) {
  if (!isOpen) return null;

  // Detect platform
  const getPlatformInfo = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent.toLowerCase());
    const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    
    if (isAndroid) {
      return {
        platform: 'Android',
        color: 'from-emerald-500 to-emerald-600',
        icon: '🤖',
        isMobile: true,
      };
    } else if (isIOS) {
      return {
        platform: 'iOS',
        color: 'from-blue-500 to-blue-600',
        icon: '🍎',
        isMobile: true,
      };
    }
    return null;
  };

  const platformInfo = getPlatformInfo();

  const handleDownloadClick = () => {
    onDownload();
  };

  const handleContinueWeb = () => {
    window.location.href = 'https://tiffica.vercel.app/home';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[48px] max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative p-8 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-pill border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-3xl font-black tracking-tight uppercase pr-12">
            Download Tiffica
          </h2>
          <p className="text-sm text-muted font-medium mt-2">
            Order fresh tiffin on your phone
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {platformInfo ? (
            <>
              <div className={`bg-gradient-to-br ${platformInfo.color} rounded-[32px] p-8 text-center text-white`}>
                <div className="text-6xl mb-4">{platformInfo.icon}</div>
                <p className="font-black text-lg uppercase tracking-tight mb-2">
                  {platformInfo.platform} App
                </p>
                <p className="text-sm font-medium opacity-90">
                  Download and start ordering homemade tiffin today
                </p>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownloadClick}
                className="w-full bg-primary text-white px-6 py-5 rounded-[24px] font-black text-lg uppercase flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-primary/30"
              >
                <Download size={24} />
                Download App
              </button>

              <p className="text-xs text-center text-muted font-medium">
                APK will download to your Downloads folder. Then open it to install.
              </p>

              {/* Continue on Web */}
              <button
                onClick={handleContinueWeb}
                className="w-full border-2 border-gray-200 text-foreground px-6 py-4 rounded-[24px] font-black text-lg uppercase hover:bg-gray-50 transition-colors"
              >
                Use Web Version
              </button>
            </>
          ) : (
            <>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[32px] p-8 text-center">
                <Smartphone className="w-16 h-16 mx-auto text-primary mb-4" />
                <p className="font-black text-lg uppercase tracking-tight mb-2">
                  Mobile App
                </p>
                <p className="text-sm text-muted font-medium">
                  Download Tiffica to place orders and track deliveries
                </p>
              </div>

              {/* For Desktop Users */}
              <div className="space-y-3">
                <a
                  href="https://download.tiffica.xyz/tiffica-app.apk"
                  download="tiffica-app.apk"
                  className="w-full bg-emerald-500 text-white px-6 py-4 rounded-[24px] font-black text-lg uppercase flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-emerald-500/30"
                >
                  <Download size={24} />
                  Download for Android
                </a>

                <p className="text-center text-xs text-muted font-medium py-2">
                  For iOS, use the web version
                </p>
              </div>

              {/* Continue on Web */}
              <button
                onClick={handleContinueWeb}
                className="w-full border-2 border-gray-200 text-foreground px-6 py-4 rounded-[24px] font-black text-lg uppercase hover:bg-gray-50 transition-colors"
              >
                Use Web Version
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 rounded-b-[48px] text-center">
          <p className="text-xs text-muted font-medium uppercase tracking-widest">
            Direct download from tiffica.xyz
          </p>
        </div>
      </div>
    </div>
  );
}
