'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Umbrella, 
  Mountain, 
  Landmark,
  Binoculars,
  Crown,
  Compass,
  Heart,
  Users,
  Wallet,
  Check,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  { id: 'mood', label: 'Destination Mood', icon: Compass },
  { id: 'style', label: 'Travel Style', icon: Heart },
  { id: 'budget', label: 'Budget Range', icon: Wallet },
];

const moods = [
  { id: 'beach', label: 'Beach Escape', icon: Umbrella, description: 'Coastal serenity & sunsets', color: 'from-cyan-500/20 to-blue-500/20', iconColor: 'text-cyan-400' },
  { id: 'mountain', label: 'Mountain Retreat', icon: Mountain, description: 'Peak tranquility & adventure', color: 'from-emerald-500/20 to-green-500/20', iconColor: 'text-emerald-400' },
  { id: 'heritage', label: 'Heritage Discovery', icon: Landmark, description: 'Timeless culture & history', color: 'from-amber-500/20 to-orange-500/20', iconColor: 'text-amber-400' },
  { id: 'safari', label: 'Wildlife Safari', icon: Binoculars, description: 'Jungle thrills & wildlife', color: 'from-lime-500/20 to-green-600/20', iconColor: 'text-lime-400' },
];

const travelStyles = [
  { id: 'luxury', label: 'Luxury', icon: Crown, description: 'Premium everything', color: 'from-gold/20 to-amber-500/20', iconColor: 'text-gold' },
  { id: 'adventure', label: 'Adventure', icon: Compass, description: 'Thrill & exploration', color: 'from-orange-500/20 to-red-500/20', iconColor: 'text-orange-400' },
  { id: 'romantic', label: 'Romantic', icon: Heart, description: 'Couples & honeymoon', color: 'from-pink-500/20 to-rose-500/20', iconColor: 'text-pink-400' },
  { id: 'family', label: 'Family', icon: Users, description: 'Fun for all ages', color: 'from-teal-500/20 to-cyan-500/20', iconColor: 'text-teal-400' },
];

const budgets = [
  { id: '50k', label: '₹50k+', description: 'Starter luxury', range: '₹50,000 - ₹99,999', color: 'from-emerald-500/20 to-teal-500/20' },
  { id: '1L', label: '₹1L+', description: 'Premium experience', range: '₹1,00,000 - ₹1,99,999', color: 'from-amber-500/20 to-gold/20' },
  { id: '2L', label: '₹2L+', description: 'Ultra-luxury', range: '₹2,00,000 - ₹4,99,999', color: 'from-orange-500/20 to-red-500/20' },
  { id: '5L', label: '₹5L+', description: 'Bespoke indulgence', range: '₹5,00,000+', color: 'from-purple-500/20 to-pink-500/20' },
];

export function DreamJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return selectedMood !== null;
      case 1: return selectedStyle !== null;
      case 2: return selectedBudget !== null;
      default: return false;
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedMood(null);
    setSelectedStyle(null);
    setSelectedBudget(null);
    setIsComplete(false);
  };

  const getStepIcon = (index: number) => {
    if (index < currentStep) return Check;
    return steps[index].icon;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-4">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500 ${
                    isSelected
                      ? 'border-gold/50 bg-gradient-to-br shadow-luxury-lg gold-ring'
                      : 'border-white/10 bg-white/[0.03] hover:border-gold/30 hover:bg-white/[0.06]'
                  }`}
                >
                  {/* Background gradient on hover/select */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${mood.color}`} />
                  
                  <div className="relative z-10">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${
                      isSelected ? 'scale-110 shadow-lg shadow-gold/20' : ''
                    }`}>
                      <Icon className={`h-7 w-7 ${mood.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{mood.label}</h3>
                    <p className="mt-1 text-sm text-white/50">{mood.description}</p>
                  </div>

                  {/* Selected checkmark */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-2 gap-4">
            {travelStyles.map((style) => {
              const Icon = style.icon;
              const isSelected = selectedStyle === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500 ${
                    isSelected
                      ? 'border-gold/50 bg-gradient-to-br shadow-luxury-lg gold-ring'
                      : 'border-white/10 bg-white/[0.03] hover:border-gold/30 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${style.color}`} />
                  
                  <div className="relative z-10">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${
                      isSelected ? 'scale-110 shadow-lg shadow-gold/20' : ''
                    }`}>
                      <Icon className={`h-7 w-7 ${style.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{style.label}</h3>
                    <p className="mt-1 text-sm text-white/50">{style.description}</p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-2 gap-4">
            {budgets.map((budget) => {
              const isSelected = selectedBudget === budget.id;
              return (
                <button
                  key={budget.id}
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500 ${
                    isSelected
                      ? 'border-gold/50 bg-gradient-to-br shadow-luxury-lg gold-ring'
                      : 'border-white/10 bg-white/[0.03] hover:border-gold/30 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${budget.color}`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white">{budget.label}</h3>
                    <p className="mt-1 text-sm text-white/50">{budget.description}</p>
                    <p className="mt-2 text-xs text-gold-light/70 font-medium">{budget.range}</p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        );
    }
  };

  return (
    <section className="relative overflow-hidden py-section-lg bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,74,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/80"
            >
              Design Your Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-display font-semibold text-white sm:text-display-lg"
            >
              Design Your{' '}
              <span className="text-gradient-gold">Dream Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-lg text-white/50 max-w-2xl mx-auto"
            >
              Tell us your preferences and we'll craft a bespoke itinerary tailored perfectly to you.
            </motion.p>
          </div>

          {!isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-luxury-xl"
            >
              <div className="p-8 sm:p-10">
                {/* Premium Progress Steps */}
                <div className="mb-10">
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => {
                      const StepIcon = getStepIcon(index);
                      const isActive = index === currentStep;
                      const isDone = index < currentStep;
                      return (
                        <div key={step.id} className="flex items-center">
                          <div className="flex flex-col items-center gap-2">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-medium transition-all duration-500 ${
                                isActive
                                  ? 'bg-gold text-white shadow-lg shadow-gold/30 scale-110'
                                  : isDone
                                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                                  : 'bg-white/5 text-white/40 border border-white/10'
                              }`}
                            >
                              <StepIcon className="h-5 w-5" />
                            </div>
                            <span className={`text-xs font-medium hidden sm:block ${
                              isActive ? 'text-gold-light' : isDone ? 'text-teal-400' : 'text-white/40'
                            }`}>
                              {step.label}
                            </span>
                          </div>
                          {index < steps.length - 1 && (
                            <div className={`h-0.5 w-16 sm:w-24 mx-4 transition-all duration-500 ${
                              isDone 
                                ? 'bg-gradient-to-r from-teal-500/50 to-gold/50' 
                                : 'bg-white/10'
                            }`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <button
                    onClick={handleBack}
                    className={`inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors ${
                      currentStep === 0 ? 'invisible' : ''
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="rounded-full px-8 py-5 bg-gold hover:bg-gold-light text-white shadow-lg shadow-gold/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {currentStep === steps.length - 1 ? (
                      <>
                        Generate My Itinerary
                        <Sparkles className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/[0.04] to-white/[0.02] backdrop-blur-sm p-12 text-center shadow-luxury-xl"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-500 shadow-xl shadow-gold/30">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">Your Dream Journey Awaits!</h3>
              <p className="mt-3 text-white/60 max-w-md mx-auto">
                We're curating the perfect bespoke itinerary based on your preferences.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild className="rounded-full px-8 py-5 bg-gold hover:bg-gold-light shadow-lg shadow-gold/20">
                  <Link href="/plan">
                    View My Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button onClick={handleReset} variant="ghost" className="rounded-full px-8 py-5 text-white/60 hover:text-white border border-white/10">
                  Start Over
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}