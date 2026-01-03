import { useState } from "react";
import { OnboardingStep } from "@/components/onboarding/OnboardingStep";
import { OnboardingComplete } from "@/components/onboarding/OnboardingComplete";
import { ParentNameStep } from "@/components/onboarding/steps/ParentNameStep";
import { TimezoneStep } from "@/components/onboarding/steps/TimezoneStep";
import { WakeTimeStep } from "@/components/onboarding/steps/WakeTimeStep";
import { MedicationStep } from "@/components/onboarding/steps/MedicationStep";
import { DeviceConnectionStep } from "@/components/onboarding/steps/DeviceConnectionStep";

interface OnboardingData {
  parentName: string;
  timezone: string;
  wakeTime: string;
  medicationTime: string;
  noMedication: boolean;
  devices: string[];
}

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    parentName: "",
    timezone: "",
    wakeTime: "",
    medicationTime: "",
    noMedication: false,
    devices: [],
  });

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS + 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const toggleDevice = (device: string) => {
    setData((prev) => ({
      ...prev,
      devices: prev.devices.includes(device)
        ? prev.devices.filter((d) => d !== device)
        : [...prev.devices, device],
    }));
  };

  // Show completion screen
  if (currentStep > TOTAL_STEPS) {
    return <OnboardingComplete parentName={data.parentName || "your loved one"} />;
  }

  // Step 1: Parent Name
  if (currentStep === 1) {
    return (
      <OnboardingStep
        currentStep={1}
        totalSteps={TOTAL_STEPS}
        question="What's your parent's name?"
        helperText="We'll use this to personalize your updates"
        onContinue={goNext}
        isValid={data.parentName.trim().length > 0}
        showBack={false}
      >
        <ParentNameStep
          value={data.parentName}
          onChange={(value) => updateData({ parentName: value })}
        />
      </OnboardingStep>
    );
  }

  // Step 2: Timezone
  if (currentStep === 2) {
    return (
      <OnboardingStep
        currentStep={2}
        totalSteps={TOTAL_STEPS}
        question="What timezone are they in?"
        onBack={goBack}
        onContinue={goNext}
        onSkip={goNext}
        isValid={data.timezone.length > 0}
      >
        <TimezoneStep
          value={data.timezone}
          onChange={(value) => updateData({ timezone: value })}
        />
      </OnboardingStep>
    );
  }

  // Step 3: Wake Time
  if (currentStep === 3) {
    return (
      <OnboardingStep
        currentStep={3}
        totalSteps={TOTAL_STEPS}
        question="What time do they usually wake up?"
        helperText="This helps us know when to start checking in"
        onBack={goBack}
        onContinue={goNext}
        isValid={data.wakeTime.length > 0}
      >
        <WakeTimeStep
          value={data.wakeTime}
          onChange={(value) => updateData({ wakeTime: value })}
        />
      </OnboardingStep>
    );
  }

  // Step 4: Medication
  if (currentStep === 4) {
    return (
      <OnboardingStep
        currentStep={4}
        totalSteps={TOTAL_STEPS}
        question="Do they take daily medication?"
        helperText="We'll include this in your daily update"
        onBack={goBack}
        onContinue={goNext}
        onSkip={goNext}
        isValid={data.noMedication || data.medicationTime.length > 0}
      >
        <MedicationStep
          time={data.medicationTime}
          noMedication={data.noMedication}
          onTimeChange={(value) => updateData({ medicationTime: value })}
          onNoMedicationChange={(value) =>
            updateData({ noMedication: value, medicationTime: value ? "" : data.medicationTime })
          }
        />
      </OnboardingStep>
    );
  }

  // Step 5: Device Connections
  return (
    <OnboardingStep
      currentStep={5}
      totalSteps={TOTAL_STEPS}
      question="How should we stay connected?"
      helperText="Select one or more options"
      onBack={goBack}
      onContinue={goNext}
      isValid={data.devices.length > 0}
    >
      <DeviceConnectionStep
        selectedDevices={data.devices}
        onToggleDevice={toggleDevice}
      />
    </OnboardingStep>
  );
}
