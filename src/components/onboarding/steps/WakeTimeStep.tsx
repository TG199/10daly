import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface WakeTimeStepProps {
  value: string;
  onChange: (value: string) => void;
}

const wakeTimes = [
  { value: "05:00", label: "5:00 AM" },
  { value: "05:30", label: "5:30 AM" },
  { value: "06:00", label: "6:00 AM" },
  { value: "06:30", label: "6:30 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "07:30", label: "7:30 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "08:30", label: "8:30 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
];

export function WakeTimeStep({ value, onChange }: WakeTimeStepProps) {
  return (
    <div className="space-y-3">
      <Label className="text-base text-foreground">Usual wake-up time</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-12 text-base border-input">
          <SelectValue placeholder="Select a time" />
        </SelectTrigger>
        <SelectContent>
          {wakeTimes.map((time) => (
            <SelectItem key={time.value} value={time.value} className="text-base">
              {time.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
