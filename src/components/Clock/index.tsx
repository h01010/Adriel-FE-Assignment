import { StyledClock } from "./style";

const Clock = () => {
  return (
    <StyledClock id="clock_section">
      <div className="center_circle" />
      <div className="dial hour" />
      <div className="dial minute" />
      <div className="dial second" />
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
