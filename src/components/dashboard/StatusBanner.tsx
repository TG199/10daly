import { Check, Sun, AlertCircle, Heart } from "lucide-react";

type StatusType = 'normal' | 'attention' | 'needs-attention';

interface StatusBannerProps {
  status: StatusType;
  headline: string;
  subtext: string;
  lastUpdated: string;
}

const statusConfig = {
  normal: {
    bgClass: "bg-sage-light border-primary/30",
    icon: Sun,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  attention: {
    bgClass: "bg-amber-50 border-amber-200",
    icon: AlertCircle,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  'needs-attention': {
    bgClass: "bg-rose-50 border-rose-200",
    icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
};

export function StatusBanner({ status, headline, subtext, lastUpdated }: StatusBannerProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`rounded-2xl border-2 p-8 ${config.bgClass}`}>
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full ${config.iconBg} flex items-center justify-center mb-4`}>
          <Icon className={`w-8 h-8 ${config.iconColor}`} />
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
          {headline}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-4 max-w-md">
          {subtext}
        </p>
        
        <span className="text-sm text-muted-foreground/70">
          Updated {lastUpdated}
        </span>
      </div>
    </div>
  );
}
