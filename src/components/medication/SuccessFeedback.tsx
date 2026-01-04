import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface SuccessFeedbackProps {
  confirmedAt: string;
}

export function SuccessFeedback({ confirmedAt }: SuccessFeedbackProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300">
      {/* Success checkmark */}
      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-8 h-8 text-primary-foreground" strokeWidth={3} />
        </div>
      </div>

      {/* Success message */}
      <h2 className="font-serif text-2xl text-foreground mb-2">All set!</h2>
      <p className="text-muted-foreground">
        Medication confirmed at {confirmedAt}
      </p>

      {/* Manual navigation link */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-8 text-sm text-primary hover:text-primary/80 underline underline-offset-2"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
