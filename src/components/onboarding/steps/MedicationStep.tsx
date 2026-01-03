import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface MedicationStepProps {
  time: string;
  noMedication: boolean;
  onTimeChange: (value: string) => void;
  onNoMedicationChange: (value: boolean) => void;
}

const medicationTimes = [
  { value: "06:00", label: "6:00 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
];

export function MedicationStep({
  time,
  noMedication,
  onTimeChange,
  onNoMedicationChange,
}: MedicationStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-base text-foreground">Medication time</Label>
        <Select value={time} onValueChange={onTimeChange} disabled={noMedication}>
          <SelectTrigger className="h-12 text-base border-input">
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            {medicationTimes.map((t) => (
              <SelectItem key={t.value} value={t.value} className="text-base">
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-3">
        <Checkbox
          id="noMedication"
          checked={noMedication}
          onCheckedChange={(checked) => onNoMedicationChange(checked === true)}
        />
        <Label
          htmlFor="noMedication"
          className="text-base text-muted-foreground cursor-pointer"
        >
          No daily medication
        </Label>
      </div>
    </div>
  );
}
