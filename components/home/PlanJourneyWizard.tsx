'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Wallet, 
  Compass,
  Check,
  Plane,
  Hotel,
  Utensils,
  Camera,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  { id: 'destination', label: 'Destination', icon: MapPin },
  { id: 'budget', label: 'Budget', icon: Wallet },
  { id: 'style', label: 'Travel Style', icon: Compass },
];

const destinations = [
  { id: 'rajasthan', label: 'Rajasthan', emoji: '🏰', description: 'Palaces & deserts' },
  { id: 'kerala', label: 'Kerala', emoji: '🌴', description: 'Backwaters & wellness' },
  { id: 'goa', label: 'Goa', emoji: '🏖️', description: 'Beachfront luxury' },
  { id: 'himalayas', label: 'Himalayas', emoji: '🏔️', description: 'Mountain serenity' },
  { id: 'south', label: 'South India', emoji: '🛕', description: 'Temples & culture' },
  { id: 'north-east', label: 'North East', emoji: '🌿', description: 'Off the beaten path' },
];

const budgets = [
  { id: 'moderate', label: 'Moderate', range: '₹25K - ₹50K', description: 'Comfortable stays' },
  { id: 'premium', label: 'Premium', range: '₹50K - ₹1L', description: 'Luxury experiences' },
  { id: 'ultra-luxury', label: 'Ultra Luxury', range: '₹1L+', description: 'Bespoke everything' },
];

const styles = [
  { id: 'heritage', label: 'Heritage & Culture', icon: Camera },
  { id: 'relaxation', label: 'Relaxation & Wellness', icon: Hotel },
  { id: 'adventure', label: 'Adventure & Nature', icon: Plane },
  { id: 'culinary', label: 'Food & Culinary', icon: Utensils },
];

export function PlanJourneyWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
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
      case 0: return selectedDestination !== null;
      case 1: return selectedBudget !== null;
      case 2: return selectedStyle !== null;
      default: return false;
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedDestination(null);
    setSelectedBudget(null);
    setSelectedStyle(null);
    setIsComplete(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-3">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className={`group rounded-xl border p-4 text-left transition-all duration-300 ${
                  selectedDestination === dest.id
                    ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/[0.02]'
                }`}
              >
                <span className="text-2xl">{dest.emoji}</span>
                <p className="mt-2 text-sm font-semibold text-foreground">{dest.label}</p>
                <p className="text-xs text-muted-foreground">{dest.description}</p>
              </button>
            ))}
          </div>
        );

      case 1:
        return (
          <div className="space-y-3">
            {budgets.map((budget) => (
              <button
                key={budget.id}
                onClick={() => setSelectedBudget(budget.id)}
                className={`group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-300 ${
                  selectedBudget === budget.id
                    ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/[0.02]'
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{budget.label}</p>
                  <p className="text-xs text-muted-foreground">{budget.description}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{budget.range}</span>
              </button>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-2 gap-3">
            {styles.map((style) => {
              const Icon = style.icon;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`group flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-all duration-300 ${
                    selectedStyle === style.id
                      ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/[0.02]'
                  }`}
                >
                  <Icon className={`h-8 w-8 ${selectedStyle === style.id ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-semibold text-foreground">{style.label}</span>
                </button>
              );
            })}
          </div>
        );
    }
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground"
            >
              Plan Your Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-4xl font-bold text-foreground sm:text-5xl sm:leading-tight"
            >
              Tell us your{' '}
              <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">travel preferences</span>.
            </motion.h2>
          </div>

          {!isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm"
            >
              <div className="p-8 sm:p-10">
                {/* Progress Steps */}
                <div className="mb-10 flex items-center justify-between">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = index === currentStep;
                    const isDone = index < currentStep;
                    return (
                      <div key={step.id} className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                              isActive
                                ? 'bg-foreground text-background shadow-lg'
                                : isDone
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-white/[0.05] text-muted-foreground border border-white/10'
                            }`}
                          >
                            {isDone ? <Check className="h-4 w-4" /> : <StepIcon className="h-4 w-4" />}
                          </div>
                          <span className={`hidden text-sm font-medium sm:inline ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`h-px w-12 sm:w-20 ${isDone ? 'bg-primary/50' : 'bg-white/10'}`} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <button
                    onClick={handleBack}
                    className={`text-sm font-medium text-muted-foreground transition hover:text-foreground ${
                      currentStep === 0 ? 'invisible' : ''
                    }`}
                  >
                    ← Back
                  </button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="rounded-full px-8 py-5"
                  >
                    {currentStep === steps.length - 1 ? (
                      <>
                        Generate My Plan
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
            /* Success State — premium finish */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-12 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-xl">
                <Sparkles className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">Your Journey Awaits!</h3>
              <p className="mt-3 text-muted-foreground">
                We're curating the perfect itinerary based on your preferences.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild className="rounded-full px-8 py-5">
                  <Link href="/plan">
                    View My Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button onClick={handleReset} variant="ghost" className="rounded-full px-8 py-5">
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