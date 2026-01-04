import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsGroup } from "@/components/settings/SettingsGroup";
import { SettingRow } from "@/components/settings/SettingRow";
import { EditSettingDialog } from "@/components/settings/EditSettingDialog";
import { useToast } from "@/hooks/use-toast";

// Mock data - ready for backend integration
const initialSettings = {
  parentName: "Mom",
  timezone: "America/New_York",
  wakeTime: "08:00",
  medicationTime: "14:00",
  appleHealthConnected: true,
  manualCheckIn: true,
};

const timezoneOptions = [
  { value: "America/New_York", label: "Eastern Time" },
  { value: "America/Chicago", label: "Central Time" },
  { value: "America/Denver", label: "Mountain Time" },
  { value: "America/Los_Angeles", label: "Pacific Time" },
];

export default function SettingsPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settings, setSettings] = useState(initialSettings);
  
  const [editDialog, setEditDialog] = useState<{
    open: boolean;
    key: string;
    title: string;
    value: string;
    type: "text" | "select" | "time";
    options?: { value: string; label: string }[];
  }>({
    open: false,
    key: "",
    title: "",
    value: "",
    type: "text",
  });

  const openEdit = (
    key: string,
    title: string,
    value: string,
    type: "text" | "select" | "time",
    options?: { value: string; label: string }[]
  ) => {
    setEditDialog({ open: true, key, title, value, type, options });
  };

  const handleSave = (value: string) => {
    setSettings((prev) => ({ ...prev, [editDialog.key]: value }));
    toast({
      title: "Settings saved",
      description: `${editDialog.title} has been updated.`,
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  const getTimezoneLabel = (value: string) => {
    return timezoneOptions.find((tz) => tz.value === value)?.label || value;
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20">
      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-4 max-w-2xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/dashboard")}
          className="text-muted-foreground"
          aria-label="Go back to dashboard"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-serif text-2xl text-foreground">Settings</h1>
      </header>

      {/* Settings Content */}
      <main className="px-6 pb-8 max-w-2xl mx-auto space-y-8">
        {/* Care Settings */}
        <SettingsGroup title="Care Settings">
          <SettingRow
            label="Parent's name"
            value={settings.parentName}
            onClick={() => openEdit("parentName", "Parent's name", settings.parentName, "text")}
          />
          <SettingRow
            label="Timezone"
            value={getTimezoneLabel(settings.timezone)}
            onClick={() =>
              openEdit("timezone", "Timezone", settings.timezone, "select", timezoneOptions)
            }
          />
          <SettingRow
            label="Wake-up time"
            value={formatTime(settings.wakeTime)}
            onClick={() => openEdit("wakeTime", "Wake-up time", settings.wakeTime, "time")}
          />
          <SettingRow
            label="Medication time"
            value={formatTime(settings.medicationTime)}
            onClick={() =>
              openEdit("medicationTime", "Medication time", settings.medicationTime, "time")
            }
          />
        </SettingsGroup>

        {/* Connections */}
        <SettingsGroup title="Connections">
          <SettingRow
            label="Apple Health"
            value={settings.appleHealthConnected ? "Connected" : "Not connected"}
            showChevron={true}
          />
          <SettingRow
            label="Manual Check-in"
            value={settings.manualCheckIn ? "Enabled" : "Disabled"}
            showChevron={true}
          />
        </SettingsGroup>

        {/* Account */}
        <SettingsGroup title="Account">
          <SettingRow label="Need help?" showChevron={true} />
          <SettingRow
            label="Sign out"
            showChevron={false}
            destructive
            onClick={handleSignOut}
          />
        </SettingsGroup>
      </main>

      {/* Edit Dialog */}
      <EditSettingDialog
        open={editDialog.open}
        onOpenChange={(open) => setEditDialog((prev) => ({ ...prev, open }))}
        title={editDialog.title}
        value={editDialog.value}
        type={editDialog.type}
        options={editDialog.options}
        onSave={handleSave}
      />
    </div>
  );
}
