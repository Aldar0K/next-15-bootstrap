"use client";

import { useEffect, useState } from "react";

export const useClientTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString("ru-RU"));
  }, []);

  return time;
};
