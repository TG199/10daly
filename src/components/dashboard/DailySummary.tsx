interface DailySummaryProps {
  summary: string;
}

export function DailySummary({ summary }: DailySummaryProps) {
  return (
    <div className="bg-warmth/40 rounded-xl p-6">
      <p className="text-lg leading-relaxed text-foreground">
        {summary}
      </p>
    </div>
  );
}
