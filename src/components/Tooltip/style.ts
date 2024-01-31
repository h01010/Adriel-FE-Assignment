import styled from "styled-components";

export const StyledTooltip = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  background-color: rgb(2, 2, 2, 0.8);
  border-radius: 5px;
  color: whitesmoke;
  font-size: 12px;
  padding: 5px 11px;
  width: fit-content;
  z-index: 100;
`;
