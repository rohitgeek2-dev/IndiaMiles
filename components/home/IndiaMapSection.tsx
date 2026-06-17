'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const indiaRegions = [
  // --- NORTH ---
  {
    name: 'Ladakh',
    color: 'from-violet-500 to-purple-500',
    x: '30.0%',
    y: '8.8%',
    link: '/states/ladakh',
  },
  {
    name: 'Jammu & Kashmir',
    color: 'from-indigo-500 to-blue-500',
    x: '24.5%',
    y: '13.5%',
    link: '/states/jammu-and-kashmir',
  },
  {
    name: 'Himachal',
    color: 'from-sky-500 to-indigo-500',
    x: '30.2%',
    y: '19.8%',
    link: '/states/himachal-pradesh',
  },
  {
    name: 'Punjab',
    color: 'from-amber-500 to-orange-500',
    x: '24.0%',
    y: '22.0%',
    link: '/states/punjab',
  },
  {
    name: 'Uttarakhand',
    color: 'from-orange-500 to-red-500',
    x: '36.0%',
    y: '26.0%',
    link: '/states/uttarakhand',
  },
  {
    name: 'Haryana',
    color: 'from-yellow-500 to-amber-500',
    x: '28.8%',
    y: '29.2%',
    link: '/states/haryana',
  },
  {
    name: 'Delhi',
    color: 'from-red-500 to-pink-500',
    x: '31.0%',
    y: '31.0%',
    link: '/states/delhi',
  },

  // --- WEST ---
  {
    name: 'Rajasthan',
    color: 'from-amber-500 to-orange-500',
    x: '18.8%',
    y: '36.4%',
    link: '/states/rajasthan',
  },
  {
    name: 'Gujarat',
    color: 'from-yellow-500 to-amber-500',
    x: '11.2%',
    y: '49.0%',
    link: '/states/gujarat',
  },
  {
    name: 'Goa',
    color: 'from-cyan-500 to-blue-500',
    x: '20.0%',
    y: '74.3%',
    link: '/states/goa',
  },

  // --- CENTRAL ---
  {
    name: 'Madhya Pradesh',
    color: 'from-purple-500 to-violet-500',
    x: '35.1%',
    y: '49.7%',
    link: '/states/madhya-pradesh',
  },
  {
    name: 'Uttar Pradesh',
    color: 'from-green-500 to-emerald-500',
    x: '42.9%',
    y: '36.4%',
    link: '/states/uttar-pradesh',
  },
  {
    name: 'Chhattisgarh',
    color: 'from-teal-500 to-emerald-500',
    x: '47.6%',
    y: '55.0%',
    link: '/states/chhattisgarh',
  },

  // --- EAST ---
  {
    name: 'Bihar',
    color: 'from-rose-500 to-pink-500',
    x: '61.8%',
    y: '42.6%',
    link: '/states/bihar',
  },
  {
    name: 'Jharkhand',
    color: 'from-orange-500 to-red-500',
    x: '57.7%',
    y: '48.9%',
    link: '/states/jharkhand',
  },
  {
    name: 'West Bengal',
    color: 'from-rose-500 to-pink-500',
    x: '66.8%',
    y: '49.9%',
    link: '/states/west-bengal',
  },
  {
    name: 'Odisha',
    color: 'from-red-500 to-orange-500',
    x: '55.9%',
    y: '58.2%',
    link: '/states/odisha',
  },

  // --- NORTHEAST ---
  {
    name: 'Sikkim',
    color: 'from-pink-500 to-rose-500',
    x: '70.0%',
    y: '35.5%',
    link: '/states/sikkim',
  },
  {
    name: 'Assam',
    color: 'from-green-500 to-emerald-500',
    x: '83.4%',
    y: '39.6%',
    link: '/states/assam',
  },
  {
    name: 'Arunachal',
    color: 'from-sky-500 to-indigo-500',
    x: '93.5%',
    y: '31.5%',
    link: '/states/arunachal-pradesh',
  },
  {
    name: 'Nagaland',
    color: 'from-blue-500 to-indigo-500',
    x: '91.6%',
    y: '38.1%',
    link: '/states/nagaland',
  },
  {
    name: 'Meghalaya',
    color: 'from-teal-500 to-emerald-500',
    x: '78.8%',
    y: '42.2%',
    link: '/states/meghalaya',
  },
  {
    name: 'Manipur',
    color: 'from-violet-500 to-purple-500',
    x: '88.1%',
    y: '44.7%',
    link: '/states/manipur',
  },
  {
    name: 'Tripura',
    color: 'from-cyan-500 to-blue-500',
    x: '80.6%',
    y: '47.7%',
    link: '/states/tripura',
  },
  {
    name: 'Mizoram',
    color: 'from-pink-500 to-rose-500',
    x: '84.5%',
    y: '48.9%',
    link: '/states/mizoram',
  },

  // --- WESTERN GHATS / SOUTH ---
  {
    name: 'Maharashtra',
    color: 'from-blue-500 to-indigo-500',
    x: '22.9%',
    y: '61.3%',
    link: '/states/maharashtra',
  },
  {
    name: 'Telangana',
    color: 'from-purple-500 to-violet-500',
    x: '37.4%',
    y: '65.5%',
    link: '/states/telangana',
  },
  {
    name: 'Andhra Pradesh',
    color: 'from-sky-500 to-blue-500',
    x: '38.5%',
    y: '75.7%',
    link: '/states/andhra-pradesh',
  },
  {
    name: 'Karnataka',
    color: 'from-orange-500 to-red-500',
    x: '26.5%',
    y: '76.9%',
    link: '/states/karnataka',
  },
  {
    name: 'Kerala',
    color: 'from-emerald-500 to-teal-500',
    x: '28.5%',
    y: '89.2%',
    link: '/states/kerala',
  },
  {
    name: 'Tamil Nadu',
    color: 'from-teal-500 to-emerald-500',
    x: '35.3%',
    y: '88.9%',
    link: '/states/tamil-nadu',
  },
];

export function IndiaMapSection() {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/5 via-transparent to-teal-950/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
          >
            Interactive Map
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
          >
            Explore India{' '}
            <span className="text-gradient-gold">interactively</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-lg leading-relaxed text-white/50 max-w-xl"
          >
            Click on any region to discover curated luxury experiences, hotels,
            and journeys.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#071228] to-[#030712] shadow-luxury-xl"
        >
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="relative w-full max-w-xl">
              <div
                className="relative"
                style={{
                  filter:
                    'brightness(1.2) sepia(0.3) hue-rotate(-10deg) saturate(0.8)',
                }}
              >
                <object
                  data="/images/india2023High.svg"
                  type="image/svg+xml"
                  className="w-full h-auto"
                  aria-label="India Map"
                  style={{ opacity: 0.85 }}
                />
              </div>

              {indiaRegions.map((region) => (
                <Link
                  key={region.name}
                  href={region.link}
                  className="group absolute"
                  style={{
                    left: region.x,
                    top: region.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${region.color} shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:shadow-xl`}
                    >
                      <MapPin className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-[10px] font-medium text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#030712]/90 px-2 py-0.5 rounded-full border border-white/10">
                      {region.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 px-8 py-6 flex items-center justify-center">
            <Link
              href="/states"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold transition-colors"
            >
              Explore all states and territories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
