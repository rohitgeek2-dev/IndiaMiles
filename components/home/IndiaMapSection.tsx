'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const indiaRegions = [
  { name: 'Rajasthan', color: 'from-amber-500 to-orange-500', x: '20%', y: '32%', link: '/states/rajasthan' },
  { name: 'Kerala', color: 'from-emerald-500 to-teal-500', x: '30%', y: '80%', link: '/states/kerala' },
  { name: 'Goa', color: 'from-cyan-500 to-blue-500', x: '24%', y: '70%', link: '/states/goa' },
  { name: 'Himachal', color: 'from-sky-500 to-indigo-500', x: '33%', y: '16%', link: '/states/himachal-pradesh' },
  { name: 'Ladakh', color: 'from-violet-500 to-purple-500', x: '45%', y: '8%', link: '/states/ladakh' },
  { name: 'Sikkim', color: 'from-pink-500 to-rose-500', x: '65%', y: '22%', link: '/states/sikkim' },
  { name: 'Tamil Nadu', color: 'from-teal-500 to-emerald-500', x: '38%', y: '85%', link: '/states/tamil-nadu' },
  { name: 'Uttarakhand', color: 'from-orange-500 to-red-500', x: '38%', y: '22%', link: '/states/uttarakhand' },
  { name: 'Maharashtra', color: 'from-blue-500 to-indigo-500', x: '18%', y: '60%', link: '/states/maharashtra' },
  { name: 'West Bengal', color: 'from-rose-500 to-pink-500', x: '62%', y: '40%', link: '/states/west-bengal' },
];

export function IndiaMapSection() {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
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
            Click on any region to discover curated luxury experiences, hotels, and journeys.
          </motion.p>
        </div>

        {/* Interactive Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#071228] to-[#030712] shadow-luxury-xl"
        >
          {/* Map area with proper India SVG */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="relative w-full max-w-xl">
              {/* Proper India Map SVG */}
              <svg viewBox="0 0 400 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="indiaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4A94A" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#E8C96A" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#D4A94A" stopOpacity="0.05"/>
                  </linearGradient>
                  <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4A94A"/>
                    <stop offset="100%" stopColor="#E8C96A"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* India outline - stylized but recognizable */}
                <g fill="url(#indiaGold)" stroke="url(#borderGold)" strokeWidth="0.8" strokeOpacity="0.6">
                  {/* Main landmass */}
                  <path d="
                    M 195 10 
                    C 220 8, 250 15, 270 30 
                    C 290 45, 300 65, 305 85
                    C 310 105, 308 120, 300 135
                    C 295 145, 290 155, 285 165
                    C 280 175, 278 185, 280 195
                    C 282 205, 285 215, 280 230
                    C 275 245, 265 260, 250 275
                    C 240 285, 230 295, 220 310
                    C 210 325, 200 340, 195 355
                    C 190 365, 185 375, 175 385
                    C 165 395, 155 405, 150 415
                    C 148 420, 145 425, 140 430
                    C 135 435, 130 440, 128 445
                    C 126 450, 125 455, 128 460
                    C 130 465, 135 468, 140 470
                    C 145 472, 150 470, 155 468
                    C 160 466, 165 462, 170 458
                    C 175 454, 180 448, 185 442
                    C 190 436, 195 430, 200 425
                    C 205 420, 210 415, 215 410
                    C 220 405, 225 400, 230 395
                    C 235 390, 240 385, 245 378
                    C 250 371, 255 364, 258 355
                    C 261 346, 262 337, 260 328
                    C 258 319, 255 310, 255 300
                    C 255 290, 258 280, 262 270
                    C 266 260, 272 252, 278 245
                    C 284 238, 290 232, 295 225
                    C 300 218, 302 210, 300 200
                    C 298 190, 295 182, 290 175
                    C 285 168, 280 162, 278 155
                    C 276 148, 278 140, 282 132
                    C 286 124, 292 118, 298 112
                    C 304 106, 310 100, 312 92
                    C 314 84, 312 75, 305 65
                    C 298 55, 290 48, 278 42
                    C 266 36, 252 32, 238 30
                    C 224 28, 210 28, 196 30
                    Z" 
                    fill="url(#indiaGold)" stroke="url(#borderGold)" strokeWidth="0.8" strokeOpacity="0.5"
                  />

                  {/* Jammu & Kashmir / Ladakh top */}
                  <path d="
                    M 195 10
                    C 180 12, 165 18, 155 28
                    C 145 38, 140 50, 138 62
                    C 136 74, 138 85, 142 95
                    C 146 105, 152 112, 160 118
                    C 168 124, 175 128, 182 130
                    C 189 132, 195 130, 198 126
                    C 201 122, 202 116, 200 108
                    C 198 100, 195 92, 195 84
                    C 195 76, 195 68, 195 60
                    C 195 52, 195 44, 195 36
                    C 195 28, 195 20, 195 10
                    Z"
                    fill="url(#indiaGold)" stroke="url(#borderGold)" strokeWidth="0.8" strokeOpacity="0.5"
                  />

                  {/* North-east states */}
                  <path d="
                    M 285 165
                    C 295 160, 305 158, 315 162
                    C 325 166, 332 174, 335 184
                    C 338 194, 336 204, 330 212
                    C 324 220, 315 225, 305 228
                    C 295 231, 288 230, 285 225
                    C 282 220, 280 212, 278 205
                    C 276 198, 278 190, 282 182
                    C 286 174, 288 168, 285 165
                    Z"
                    fill="url(#indiaGold)" stroke="url(#borderGold)" strokeWidth="0.8" strokeOpacity="0.5"
                  />

                  {/* North-east extended */}
                  <path d="
                    M 335 184
                    C 342 178, 350 175, 358 180
                    C 366 185, 370 195, 368 205
                    C 366 215, 358 222, 348 225
                    C 338 228, 330 225, 330 212
                    Z"
                    fill="url(#indiaGold)" stroke="url(#borderGold)" strokeWidth="0.8" strokeOpacity="0.5"
                  />
                </g>

                {/* Internal grid lines for visual depth */}
                <g stroke="rgba(212,169,74,0.06)" strokeWidth="0.5">
                  <line x1="100" y1="50" x2="100" y2="450"/>
                  <line x1="200" y1="20" x2="200" y2="470"/>
                  <line x1="300" y1="50" x2="300" y2="420"/>
                  <line x1="150" y1="100" x2="350" y2="100"/>
                  <line x1="130" y1="200" x2="350" y2="200"/>
                  <line x1="130" y1="300" x2="320" y2="300"/>
                  <line x1="140" y1="400" x2="260" y2="400"/>
                </g>

                {/* Tropic of Cancer marker */}
                <line x1="120" y1="235" x2="350" y2="235" stroke="rgba(212,169,74,0.15)" strokeWidth="0.5" strokeDasharray="4,4"/>
                <text x="110" y="239" fill="rgba(212,169,74,0.2)" fontSize="8" fontFamily="sans-serif">Tropic of Cancer</text>
              </svg>

              {/* Interactive region markers */}
              {indiaRegions.map((region) => (
                <Link
                  key={region.name}
                  href={region.link}
                  className="group absolute"
                  style={{ left: region.x, top: region.y, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${region.color} shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:shadow-xl`}>
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

          {/* Bottom CTA */}
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