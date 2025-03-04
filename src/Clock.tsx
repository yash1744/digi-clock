import React, { useState, useEffect } from "react";

interface ClockProps extends React.HTMLAttributes<HTMLDivElement> {}

const Clock: React.FC<ClockProps> = ({ children, ...props }) => {
  const [time, setTime] = useState(new Date());
  const playSound = () => {
    const audio = new Audio("/welcome.mp3");
    audio.play();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      //   if (now.getSeconds() === 0) {
      //     console.log(now.getSeconds(), now.getMinutes(), now.getHours());
      //     console.log("Play sound");
      //     playSound();
      //   }
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date: Date) => {
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    const monthName = date.toLocaleString("en-US", { month: "long" });
    return `${dayName}, ${monthName} ${date.getDate()} ${date.getFullYear()}`;
  };

  return (
    <div {...props}>
      <div className="text-9xl font-bold">{formatTime(time)}</div>
      <div className="text-6xl">{formatDate(time)}</div>{" "}
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Clock;
