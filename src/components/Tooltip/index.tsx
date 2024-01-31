import useMousePosition from "../../custom-hooks/useMousePosition";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { StyledTooltip } from "./style";

const Tooltip = observer(() => {
  const mousePosition = useMousePosition();
  const { timeStore } = useStore();
  const { currentTime, showTooltip } = timeStore;

  return (
    <StyledTooltip
      visible={showTooltip}
      // set position at right-top of mouse pointer
      style={{ top: mousePosition.y - 25, left: mousePosition.x + 10 }}
    >
      {currentTime?.toLocaleTimeString() || "시간 정보를 불러오고 있습니다..."}
    </StyledTooltip>
  );
});

export default Tooltip;
