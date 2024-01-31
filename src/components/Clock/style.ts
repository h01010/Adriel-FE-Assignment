import styled from "styled-components";

export const StyledClock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 24px;
  text-align: center;
  color: darkgray;

  .center_circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.5px solid whitesmoke;
    background: darkgray;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 2;
  }

  .dial {
    position: absolute;
    transform-origin: bottom;
  }

  .hour {
    width: 6px;
    height: 60px;
    background: #222;
    top: 30%;
    left: 49%;
  }

  .minute {
    width: 4px;
    height: 80px;
    background: #444;
    top: 22%;
    left: 49.4%;
  }

  .second {
    width: 2px;
    height: 118px;
    background: red;
    top: 10.5%;
    left: 49.7%;
  }

  .clock_numbers span {
    position: absolute;
    color: #222;
    font-size: 13px;
    font-weight: 600;
  }

  .twelve {
    top: 1%;
    left: 48%;
  }

  .one {
    top: 8%;
    right: 26%;
  }

  .two {
    top: 26%;
    right: 9%;
  }

  .three {
    top: 47%;
    right: 2%;
  }

  .four {
    bottom: 26%;
    right: 9%;
  }

  .five {
    bottom: 8%;
    right: 24%;
  }

  .six {
    bottom: 1%;
    left: 49%;
  }

  .seven {
    bottom: 8%;
    left: 24%;
  }

  .eight {
    bottom: 26%;
    left: 9%;
  }

  .nine {
    top: 49%;
    left: 2%;
  }

  .ten {
    top: 26%;
    left: 9%;
  }

  .eleven {
    top: 8%;
    left: 26%;
  }
`;
