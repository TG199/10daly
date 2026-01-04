import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmationButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function ConfirmationButton({ onClick, disabled }: ConfirmationButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="w-full h-16 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98]"
      aria-label="Confirm medication has been taken"
    >
      <Check className="w-6 h-6 mr-3" />
      Yes, medication taken
    </Button>
  );
}
