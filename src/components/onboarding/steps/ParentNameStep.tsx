import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ParentNameStepProps {
  value: string;
  onChange: (value: string) => void;
}

export function ParentNameStep({ value, onChange }: ParentNameStepProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor="parentName" className="text-base text-foreground">
        Their first name
      </Label>
      <Input
        id="parentName"
        type="text"
        placeholder="e.g., Margaret"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 text-base border-input focus:border-primary"
        autoFocus
      />
    </div>
  );
}
