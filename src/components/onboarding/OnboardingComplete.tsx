import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface OnboardingCompleteProps {
  parentName: string;
}

export function OnboardingComplete({ parentName }: OnboardingCompleteProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20 flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-card rounded-xl shadow-sm border border-border p-10">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>

          <h1 className="font-serif text-3xl text-foreground mb-3">
            You're all set
          </h1>
          <p className="text-muted-foreground mb-8">
            We'll start keeping an eye on {parentName} and send you a calm,
            clear update each day.
          </p>

          <Button asChild className="w-full h-12 text-base bg-primary hover:bg-primary/90">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          You can adjust these settings anytime
        </p>
      </div>
    </div>
  );
}
