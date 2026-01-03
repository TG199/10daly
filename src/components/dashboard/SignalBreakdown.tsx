import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Footprints, Moon, Pill } from "lucide-react";
import { useState } from "react";

type SignalStatus = 'normal' | 'attention' | 'needs-attention';

interface Signal {
  status: SignalStatus;
  summary: string;
  details: string;
}

interface SignalBreakdownProps {
  movement: Signal;
  sleep: Signal;
  medication: Signal;
}

const signalConfig = {
  movement: {
    icon: Footprints,
    label: "Movement",
    borderColor: "border-l-primary",
  },
  sleep: {
    icon: Moon,
    label: "Sleep",
    borderColor: "border-l-sky-400",
  },
  medication: {
    icon: Pill,
    label: "Medication",
    borderColor: "border-l-amber-400",
  },
};

const statusDotColors = {
  normal: "bg-primary",
  attention: "bg-amber-400",
  'needs-attention': "bg-rose-400",
};

interface SignalRowProps {
  type: 'movement' | 'sleep' | 'medication';
  signal: Signal;
}

function SignalRow({ type, signal }: SignalRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const config = signalConfig[type];
  const Icon = config.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className={`flex items-center justify-between p-4 bg-card rounded-lg border-l-4 ${config.borderColor} hover:bg-muted/50 transition-colors`}>
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">{config.label}</span>
            <div className={`w-2 h-2 rounded-full ${statusDotColors[signal.status]}`} />
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm hidden sm:block">
              {signal.summary}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="px-4 py-3 bg-muted/30 rounded-b-lg -mt-1 ml-4 border-l-4 border-l-transparent">
          <p className="text-sm text-muted-foreground sm:hidden mb-2 font-medium">
            {signal.summary}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {signal.details}
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SignalBreakdown({ movement, sleep, medication }: SignalBreakdownProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-1">
        Today's Signals
      </h2>
      <div className="space-y-2">
        <SignalRow type="movement" signal={movement} />
        <SignalRow type="sleep" signal={sleep} />
        <SignalRow type="medication" signal={medication} />
      </div>
    </div>
  );
}
