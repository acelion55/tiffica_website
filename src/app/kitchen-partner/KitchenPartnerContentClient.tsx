"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PartnerFormClient from './PartnerFormClient';
import { Users, Truck, Wallet, FileText, CheckCircle, ShoppingCart } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function KitchenPartnerContentClient() {
  return (
    <motion.div initial="hidden" animate="show" variants={container} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p variants={fadeUp} className="text-xs uppercase text-primary font-black mb-3">Partner With Us</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-black mb-4">Become a Kitchen Partner in Jaipur & Beawar</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted mb-6">
              Reach thousands of customers in your city. Flexible partnership options — Instant delivery, Bulk catering and Daily tiffin plans.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3 items-center">
              <a href="#partner-form" className="bg-primary text-white px-5 py-3 rounded-lg font-bold">Partner With Us</a>
              <a href="tel:+919983745802" className="text-sm text-foreground/70">Call us: +91 9983745802</a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 border rounded-lg text-center">
                <Users className="mx-auto text-primary" size={32} />
                <h4 className="font-bold mt-3">High Demand</h4>
                <p className="text-xs text-muted">Daily orders from students, offices and households.</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <Truck className="mx-auto text-primary" size={32} />
                <h4 className="font-bold mt-3">Reliable Deliveries</h4>
                <p className="text-xs text-muted">Integrated with our delivery network for fast orders.</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <Wallet className="mx-auto text-primary" size={32} />
                <h4 className="font-bold mt-3">Fair Payouts</h4>
                <p className="text-xs text-muted">Transparent billing and timely settlements.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} id="partner-form" className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <PartnerFormClient />
          </motion.div>
        </motion.div>

        <motion.section variants={fadeUp} className="mt-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-black mb-4">How it works</motion.h2>
          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3"><FileText size={16} /></div>
              <h3 className="font-bold mb-2">Apply</h3>
              <p className="text-sm text-muted">Submit basic details using the form — name, phone, address and services.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3"><CheckCircle size={16} /></div>
              <h3 className="font-bold mb-2">Onboard</h3>
              <p className="text-sm text-muted">We verify your kitchen and set up your menu and delivery options.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3"><ShoppingCart size={16} /></div>
              <h3 className="font-bold mb-2">Start Receiving Orders</h3>
              <p className="text-sm text-muted">Begin receiving orders through the app and web — get paid on time.</p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section variants={fadeUp} className="mt-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-black mb-4">Partner Benefits</motion.h2>
          <motion.ul variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
            <li className="p-4 border rounded-lg">Access to a growing customer base in Jaipur & Beawar</li>
            <li className="p-4 border rounded-lg">Flexible service options: Instant, Bulk & Daily Tiffin</li>
            <li className="p-4 border rounded-lg">Marketing support and listing promotions</li>
            <li className="p-4 border rounded-lg">Dedicated partner support and onboarding</li>
          </motion.ul>
        </motion.section>

        <motion.section variants={fadeUp} className="mt-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-black mb-4">Requirements</motion.h2>
          <motion.ul variants={fadeUp} className="list-disc pl-6 text-sm text-muted">
            <li>Basic kitchen hygiene & safety standards</li>
            <li>Capacity to fulfill orders (minimum daily volume)</li>
            <li>Registration documents where applicable (FSSAI/license)</li>
          </motion.ul>
        </motion.section>

        <motion.section variants={fadeUp} className="mt-16">
          <motion.h2 variants={fadeUp} className="text-2xl font-black mb-4">Frequently Asked Questions</motion.h2>
          <motion.div variants={fadeUp} className="space-y-4">
            <div>
              <h4 className="font-bold">Do you charge a partnership fee?</h4>
              <p className="text-sm text-muted">No upfront fee — we take a small commission per order. Specifics are shared during onboarding.</p>
            </div>
            <div>
              <h4 className="font-bold">Can I offer bulk catering only?</h4>
              <p className="text-sm text-muted">Yes — choose the services (Instant, Bulk, Daily Tiffin) that match your kitchen.</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
