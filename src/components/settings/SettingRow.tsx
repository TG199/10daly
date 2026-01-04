import { ChevronRight } from "lucide-react";

interface SettingRowProps {
  label: string;
  value?: string;
  onClick?: () => void;
  showChevron?: boolean;
  destructive?: boolean;
}

export function SettingRow({ 
  label, 
  value, 
  onClick, 
  showChevron = true,
  destructive = false 
}: SettingRowProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-4 px-1 text-left hover:bg-muted/50 rounded-lg transition-colors -mx-1 px-2"
    >
      <span className={`font-medium ${destructive ? 'text-rose-600' : 'text-foreground'}`}>
        {label}
      </span>
      <div className="flex items-center gap-2">
        {value && (
          <span className="text-muted-foreground text-sm">{value}</span>
        )}
        {showChevron && (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
    </button>
  );
}
