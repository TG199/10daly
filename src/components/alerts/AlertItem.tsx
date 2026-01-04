import { CheckCircle, Info } from "lucide-react";

type AlertStatus = 'resolved' | 'needs-attention';

interface AlertItemProps {
  date: string;
  reason: string;
  status: AlertStatus;
}

const statusConfig = {
  resolved: {
    label: "Resolved",
    bgClass: "bg-sage-light",
    dotClass: "bg-primary",
    icon: CheckCircle,
    iconColor: "text-primary",
  },
  'needs-attention': {
    label: "Needs attention",
    bgClass: "bg-amber-50",
    dotClass: "bg-amber-400",
    icon: Info,
    iconColor: "text-amber-600",
  },
};

export function AlertItem({ date, reason, status }: AlertItemProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`rounded-xl p-5 ${config.bgClass} border border-border/50`}>
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-full ${config.bgClass} border-2 border-current flex items-center justify-center flex-shrink-0 ${config.iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-sm text-muted-foreground">{date}</span>
            <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${config.iconColor}`}>
              <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
              {config.label}
            </span>
          </div>
          
          <p className="text-foreground text-lg leading-relaxed">
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}
