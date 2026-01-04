import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

interface EditSettingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  value: string;
  type: "text" | "select" | "time";
  options?: { value: string; label: string }[];
  onSave: (value: string) => void;
}

export function EditSettingDialog({
  open,
  onOpenChange,
  title,
  value,
  type,
  options = [],
  onSave,
}: EditSettingDialogProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value, open]);

  const handleSave = () => {
    onSave(inputValue);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif">Edit {title}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {type === "text" && (
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter ${title.toLowerCase()}`}
              className="text-base"
            />
          )}
          
          {type === "select" && (
            <Select value={inputValue} onValueChange={setInputValue}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          
          {type === "time" && (
            <Input
              type="time"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-base"
            />
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
