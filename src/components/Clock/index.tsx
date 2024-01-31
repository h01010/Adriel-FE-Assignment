import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { StyledClock } from "./style";

const Clock = observer(() => {
  const { timeStore } = useStore();
  const { currentTime, setCurrentTime, setShowTooltip } = timeStore;

  useEffect(() => {
    const getTime = setInterval(() => {
      setCurrentTime();
    }, 1000);
    return () => {
      clearInterval(getTime);
    };
  });

  const handleClockMouseOver = (over: boolean) => {
    setShowTooltip(over);
  };

  return (
    <StyledClock
      id="clock_section"
      onMouseEnter={() => handleClockMouseOver(true)}
      onMouseLeave={() => handleClockMouseOver(false)}
    >
      <div className="center_circle" />
      <div
        className="dial hour"
        style={{
          transform: `rotateZ(${
            currentTime && currentTime?.getHours() * 30
          }deg)`,
        }}
      />
      <div
        className="dial minute"
        style={{
          transform: `rotateZ(${
            currentTime && currentTime?.getMinutes() * 6
          }deg)`,
        }}
      />
      <div
        className="dial second"
        style={{
          transform: `rotateZ(${
            currentTime && currentTime?.getSeconds() * 6
          }deg)`,
        }}
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
});

export default Clock;
