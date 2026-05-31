'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, ArrowRight } from 'lucide-react';

export function AppDownloadsSection() {
  const handleGooglePlayClick = () => {
    // Replace with your actual Google Play Store link
    window.open('https://play.google.com/store/apps/details?id=com.tiffica.app', '_blank');
  };

  const handleAppStoreClick = () => {
    // Replace with your actual Apple App Store link
    window.open('https://apps.apple.com/app/tiffica/id1234567890', '_blank');
  };

  const handleAPKDownloadClick = () => {
    // Direct APK download - replace with your actual APK URL
    window.open('https://download.tiffica.xyz/tiffica-app.apk', '_blank');
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-black text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[100%] bg-primary/10 blur-[150px] rounded-full" />
      <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[100%] bg-secondary/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-2 bg-primary/20 rounded-pill px-4 py-2 mb-8 border border-primary/30">
            <Smartphone size={16} className="text-primary" />
            <span className="text-xs font-black text-primary uppercase tracking-widest">Get the App</span>
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            Download <span className="text-primary italic">Tiffica</span>
            <br /> Your Perfect Meal <span className="text-primary italic">Companion</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Order, track, and manage your tiffin subscriptions from anywhere. Available on iOS and Android.
          </p>
        </motion.div>

        {/* Download Buttons Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Google Play */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            onClick={handleGooglePlayClick}
            className="group relative bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-[48px] p-12 text-center hover:border-emerald-500/60 hover:from-emerald-500/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.02 8.69L14.64 2.07c.5-.28 1.04-.42 1.57-.42 1.71 0 3.29.88 4.2 2.32l2.1 3.44c.59.95.59 2.13 0 3.08l-2.1 3.44c-.91 1.44-2.49 2.32-4.2 2.32-.53 0-1.07-.14-1.57-.42L3.02 15.31c-.64.41-1.54.41-2.18 0-.64-.41-1.02-1.13-1.02-1.9v-2.8c0-.77.38-1.49 1.02-1.9zm2.04 3.09l9.58 4.94c.37.19.76.28 1.16.28 1.16 0 2.25-.6 2.88-1.59l2.1-3.44c.4-.65.4-1.45 0-2.1l-2.1-3.44c-.63-.99-1.72-1.59-2.88-1.59-.4 0-.79.09-1.16.28L5.06 12l0 .78z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Google Play</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">Download for Android</p>
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-black text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <Download size={16} />
                Download Now
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.button>

          {/* App Store */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={handleAppStoreClick}
            className="group relative bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-[48px] p-12 text-center hover:border-blue-500/60 hover:from-blue-500/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67-.73-1.67-1.64-1.67zm0-9.5c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67-.73-1.67-1.64-1.67zM7 4c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67S7.91 4 7 4zm0 9.5c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67-.73-1.67-1.64-1.67zM12 4c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67S12.91 4 12 4zm0 9.5c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67-.73-1.67-1.64-1.67z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">App Store</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">Download for iOS</p>
              <div className="flex items-center justify-center gap-2 text-blue-400 font-black text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <Download size={16} />
                Download Now
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.button>

          {/* Direct APK */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={handleAPKDownloadClick}
            className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-[48px] p-12 text-center hover:border-orange-500/60 hover:from-orange-500/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Direct APK</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">Download for Android</p>
              <div className="flex items-center justify-center gap-2 text-orange-400 font-black text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <Download size={16} />
                Download Now
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10">
          {[
            {
              title: 'Fast & Secure',
              desc: 'Lightning-fast orders with encrypted payments',
              icon: '⚡',
            },
            {
              title: 'Live Tracking',
              desc: 'Real-time delivery tracking on your phone',
              icon: '📍',
            },
            {
              title: 'Easy Management',
              desc: 'Control subscriptions and preferences anytime',
              icon: '⚙️',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-400 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
