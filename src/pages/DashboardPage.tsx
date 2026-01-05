import { StatusBanner } from "@/components/dashboard/StatusBanner";
import { DailySummary } from "@/components/dashboard/DailySummary";
import { SignalBreakdown } from "@/components/dashboard/SignalBreakdown";
import { WeeklyTrend } from "@/components/dashboard/WeeklyTrend";
import { AppNavigation } from "@/components/navigation/AppNavigation";
import { useAppState } from "@/contexts/AppStateContext";
import { Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Mock data - ready for backend integration
const mockData = {
  parentName: "Mom",
  status: "normal" as const,
  statusHeadline: "Today looks normal",
  statusSubtext: "Mom had a quiet but steady day",
  lastUpdated: "30 minutes ago",
  summary: "Mom woke up around 8 this morning and had breakfast. She moved around the house as usual and took her afternoon medication. It's been a calm, typical Tuesday.",
  signals: {
    movement: {
      status: "normal" as const,
      summary: "Active around the house",
      details: "Morning: Moved to kitchen, living room. Afternoon: Brief garden visit. Evening: Relaxed in bedroom.",
    },
    sleep: {
      status: "normal" as const,
      summary: "Slept well last night",
      details: "Went to bed around 10pm. Woke briefly around 3am. Up at 8am feeling rested.",
    },
    medication: {
      status: "normal" as const,
      summary: "Taken on time",
      details: "Afternoon dose confirmed at 2:15pm.",
    },
  },
  weeklyTrend: ["normal", "normal", "attention", "normal", "normal", "normal", "normal"] as const,
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { isMedicationConfirmedToday, parentName } = useAppState();

  const displayName = parentName || mockData.parentName;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20 pb-24">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl text-foreground">
          {displayName}
        </h1>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8 max-w-2xl mx-auto space-y-6">
        {/* Medication Reminder CTA - show only if not confirmed today */}
        {!isMedicationConfirmedToday && (
          <button
            onClick={() => navigate("/medication-confirm")}
            className="w-full bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-4 hover:bg-primary/15 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Pill className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">Time to check in on medication</p>
              <p className="text-sm text-muted-foreground">Tap to confirm today's dose</p>
            </div>
          </button>
        )}

        {/* Status Banner */}
        <StatusBanner
          status={mockData.status}
          headline={mockData.statusHeadline}
          subtext={mockData.statusSubtext}
          lastUpdated={mockData.lastUpdated}
        />

        {/* Daily Summary */}
        <DailySummary summary={mockData.summary} />

        {/* Signal Breakdown */}
        <SignalBreakdown
          movement={mockData.signals.movement}
          sleep={mockData.signals.sleep}
          medication={mockData.signals.medication}
        />

        {/* Weekly Trend */}
        <WeeklyTrend trend={[...mockData.weeklyTrend]} todayIndex={6} />
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Last updated: 6:00 PM today
        </p>
      </footer>

      {/* Navigation */}
      <AppNavigation />
    </div>
  );
}
