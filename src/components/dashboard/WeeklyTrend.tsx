type DayStatus = 'normal' | 'attention' | 'none';

interface WeeklyTrendProps {
  trend: DayStatus[];
  todayIndex?: number;
}

const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const statusStyles = {
  normal: "bg-primary",
  attention: "bg-amber-400",
  none: "bg-muted border-2 border-muted-foreground/20",
};

export function WeeklyTrend({ trend, todayIndex = 6 }: WeeklyTrendProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
        This Week
      </h2>
      
      <div className="flex justify-between items-center">
        {trend.map((status, index) => {
          const isToday = index === todayIndex;
          
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className={`text-xs ${isToday ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                {dayLabels[index]}
              </span>
              
              <div className={`relative flex items-center justify-center`}>
                {isToday && (
                  <div className="absolute w-5 h-5 rounded-full border-2 border-primary animate-pulse" />
                )}
                <div 
                  className={`w-3 h-3 rounded-full ${statusStyles[status]}`}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Normal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs text-muted-foreground">Note</span>
        </div>
      </div>
    </div>
  );
}
