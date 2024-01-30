import { useEffect, useState } from "react";
import { StyledClock } from "./style";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const getTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(getTime);
    };
  });

  return (
    <StyledClock id="clock_section">
      <div className="center_circle" />
      <div
        className="dial hour"
        style={{ transform: `rotateZ(${time?.getHours() * 30}deg)` }}
      />
      <div
        className="dial minute"
        style={{ transform: `rotateZ(${time?.getMinutes() * 6}deg)` }}
      />
      <div
        className="dial second"
        style={{ transform: `rotateZ(${time?.getSeconds() * 6}deg)` }}
      />
      <div className="clock_numbers">
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    </StyledClock>
  );
};

export default Clock;
