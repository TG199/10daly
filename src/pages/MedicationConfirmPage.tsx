import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmationButton } from "@/components/medication/ConfirmationButton";
import { SuccessFeedback } from "@/components/medication/SuccessFeedback";
import { useAppState } from "@/contexts/AppStateContext";

export default function MedicationConfirmPage() {
  const navigate = useNavigate();
  const { confirmMedication } = useAppState();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedTime, setConfirmedTime] = useState("");

  const handleConfirm = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    setConfirmedTime(timeString);
    setIsConfirmed(true);
    confirmMedication();
  };

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-2xl mx-auto w-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/dashboard")}
          className="text-muted-foreground"
          aria-label="Go back to dashboard"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-serif text-lg text-foreground">Medication Check-in</h1>
        <span className="text-sm text-muted-foreground">{currentTime}</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="w-full max-w-sm">
          {!isConfirmed ? (
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mb-8">
                <Pill className="w-12 h-12 text-primary" />
              </div>

              {/* Prompt */}
              <h2 className="font-serif text-2xl text-foreground mb-2">
                Has Mom taken her medication?
              </h2>
              <p className="text-muted-foreground mb-10">
                Scheduled for 2:00 PM
              </p>

              {/* Confirmation Button */}
              <ConfirmationButton onClick={handleConfirm} />

              {/* Secondary action */}
              <button
                onClick={() => navigate("/dashboard")}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Not yet
              </button>
            </div>
          ) : (
            <SuccessFeedback confirmedAt={confirmedTime} />
          )}
        </div>
      </main>
    </div>
  );
}
