import { useEffect, useState } from "react";

const formatTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const LastOnlineClock = ({ lastOnline }: { lastOnline: number }) => {
  const [elapsed, setElapsed] = useState<number>(
    Math.floor(Date.now() / 1000) - lastOnline
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{formatTime(elapsed)}</>;
};

export default LastOnlineClock;
