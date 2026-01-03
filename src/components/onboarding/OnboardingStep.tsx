import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface OnboardingStepProps {
  currentStep: number;
  totalSteps: number;
  question: string;
  helperText?: string;
  children: ReactNode;
  onBack?: () => void;
  onContinue: () => void;
  onSkip?: () => void;
  isValid?: boolean;
  showBack?: boolean;
}

export function OnboardingStep({
  currentStep,
  totalSteps,
  question,
  helperText,
  children,
  onBack,
  onContinue,
  onSkip,
  isValid = true,
  showBack = true,
}: OnboardingStepProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20 flex flex-col">
      {/* Header */}
      <div className="w-full max-w-md mx-auto px-6 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-serif text-xl text-foreground">Tenderly</h1>
          <span className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-sage-light" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-sm border border-border p-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              {question}
            </h2>
            {helperText && (
              <p className="text-muted-foreground mb-8">{helperText}</p>
            )}
            {!helperText && <div className="mb-8" />}

            <div className="space-y-6">
              {children}

              <Button
                onClick={onContinue}
                disabled={!isValid}
                className="w-full h-12 text-base bg-primary hover:bg-primary/90"
              >
                Continue
              </Button>

              {onSkip && (
                <button
                  onClick={onSkip}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skip this step
                </button>
              )}
            </div>
          </div>

          {/* Back Button */}
          {showBack && onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-6 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
