import { ReactNode } from "react";

interface SettingsGroupProps {
  title: string;
  children: ReactNode;
}

export function SettingsGroup({ title, children }: SettingsGroupProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-1 mb-3">
        {title}
      </h2>
      <div className="bg-card rounded-xl border border-border/50 px-4 divide-y divide-border/50">
        {children}
      </div>
    </div>
  );
}
