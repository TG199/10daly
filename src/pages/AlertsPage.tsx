import { Bell } from "lucide-react";
import { AlertItem } from "@/components/alerts/AlertItem";
import { AppNavigation } from "@/components/navigation/AppNavigation";

// Mock data - will be replaced with real data from backend
const mockAlerts = [
  {
    id: 1,
    date: "Today, 2:30 PM",
    reason: "Mom was less active than usual this afternoon",
    status: "needs-attention" as const,
  },
  {
    id: 2,
    date: "Yesterday, 9:15 AM",
    reason: "Morning medication was taken a bit later than usual",
    status: "resolved" as const,
  },
  {
    id: 3,
    date: "Monday, Jan 6",
    reason: "Sleep was lighter than typical last night",
    status: "resolved" as const,
  },
  {
    id: 4,
    date: "Sunday, Jan 5",
    reason: "Less movement detected in the evening",
    status: "resolved" as const,
  },
  {
    id: 5,
    date: "Friday, Jan 3",
    reason: "Woke up earlier than usual",
    status: "resolved" as const,
  },
];

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Bell className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-2xl text-foreground">Alerts History</h1>
              <p className="text-sm text-muted-foreground">
                A record of things we noticed
              </p>
            </div>
          </div>
        </div>

        {/* Info note */}
        <div className="bg-accent/50 rounded-xl p-4 mb-6 border border-accent">
          <p className="text-sm text-accent-foreground leading-relaxed">
            These are gentle observations, not emergencies. They help you stay informed about 
            changes in daily patterns.
          </p>
        </div>

        {/* Alerts list */}
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <AlertItem
              key={alert.id}
              date={alert.date}
              reason={alert.reason}
              status={alert.status}
            />
          ))}
        </div>

        {/* Empty state - shown when no alerts */}
        {mockAlerts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-sage-light mx-auto flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-xl text-foreground mb-2">
              No alerts yet
            </h2>
            <p className="text-muted-foreground">
              Everything has been running smoothly
            </p>
          </div>
        )}

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Showing the last 30 days of observations
        </p>
      </div>

      {/* Navigation */}
      <AppNavigation />
    </div>
  );
}
