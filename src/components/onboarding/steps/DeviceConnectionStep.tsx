import { Card } from "@/components/ui/card";
import { Check, Apple, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeviceConnectionStepProps {
  selectedDevices: string[];
  onToggleDevice: (device: string) => void;
}

const devices = [
  {
    id: "apple-health",
    name: "Apple Health",
    description: "Automatic updates from Apple Watch or iPhone",
    icon: Apple,
  },
  {
    id: "manual-checkin",
    name: "Manual Check-in",
    description: "Daily check-in through the app or a simple call",
    icon: Hand,
  },
];

export function DeviceConnectionStep({
  selectedDevices,
  onToggleDevice,
}: DeviceConnectionStepProps) {
  return (
    <div className="space-y-4">
      {devices.map((device) => {
        const isSelected = selectedDevices.includes(device.id);
        const Icon = device.icon;

        return (
          <Card
            key={device.id}
            onClick={() => onToggleDevice(device.id)}
            className={cn(
              "p-5 cursor-pointer transition-all border-2",
              isSelected
                ? "border-primary bg-sage-light/30"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{device.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {device.description}
                </p>
              </div>
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border"
                )}
              >
                {isSelected && <Check className="w-4 h-4" />}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
