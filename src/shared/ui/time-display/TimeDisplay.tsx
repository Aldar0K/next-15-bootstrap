"use client";

import { useClientTime } from "@/shared/hooks/useClientTime";

interface TimeDisplayProps {
  label: string;
  className?: string;
}

export const TimeDisplay = ({ label, className = "" }: TimeDisplayProps) => {
  const time = useClientTime();

  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {label}: {time || "Загрузка..."}
    </p>
  );
};
