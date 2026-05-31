import { useEffect, useState } from 'react';

export function useOrderAction() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Detect if mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      return mobileRegex.test(userAgent.toLowerCase());
    };

    setIsMobile(checkMobile());
  }, []);

  const handleOrderClick = () => {
    if (isMobile === null) return;
    // Always show the download modal
    setShowModal(true);
  };

  const handleDownloadApp = () => {
    // Detect platform and offer direct download
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent.toLowerCase());
    const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());

    if (isAndroid) {
      try {
        // Option 1: Try direct download from your CDN/server
        // Replace these URLs with your actual hosting
        const apkUrl = 'https://github.com/yourusername/tiffica/releases/download/v1.0.0/tiffica-app.apk';
        // Alternative: const apkUrl = 'https://download.tiffica.xyz/tiffica-app.apk';
        
        const link = document.createElement('a');
        link.href = apkUrl;
        link.download = 'tiffica-app.apk';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      } catch (err) {
        console.error('Download error:', err);
        // Show error message
        alert('Download failed. Please check your internet connection and try again.');
      }
    } else if (isIOS) {
      // For iOS, direct to PWA
      window.location.href = 'https://tiffica.vercel.app/home';
    } else {
      // Desktop - direct to web app
      window.location.href = 'https://tiffica.vercel.app/home';
    }
  };

  return {
    isMobile,
    showModal,
    setShowModal,
    handleOrderClick,
    handleDownloadApp,
  };
}
