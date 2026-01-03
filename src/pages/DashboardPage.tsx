import { StatusBanner } from "@/components/dashboard/StatusBanner";
import { DailySummary } from "@/components/dashboard/DailySummary";
import { SignalBreakdown } from "@/components/dashboard/SignalBreakdown";
import { WeeklyTrend } from "@/components/dashboard/WeeklyTrend";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl text-foreground">
          {mockData.parentName}
        </h1>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings className="w-5 h-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8 max-w-2xl mx-auto space-y-6">
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
      <footer className="px-6 py-4 text-center border-t border-border/50 bg-background/50">
        <p className="text-sm text-muted-foreground">
          Last updated: 6:00 PM today
        </p>
      </footer>
    </div>
  );
}
