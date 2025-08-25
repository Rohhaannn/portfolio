import React, { useState, useEffect } from 'react';
import { ImClock } from "react-icons/im";

const Clock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const formattedHours = hours.toString().padStart(2, '0');

    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="navbar-clock flex flex-row justify-center items-center gap-2 py-0.5">
      <ImClock size={18} className='text-sky-400'/> {formatTime(time)}
    </div>
  );
};

export default Clock;