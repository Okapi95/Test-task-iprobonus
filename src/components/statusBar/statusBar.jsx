import React from "react";
import classes from "./statusBar.module.less";

function StatusBar(props) {
  return (
    <div className={classes.statusBar}>
      <div>
        <img
          src={props.statusBarFigmaSvg}
          alt="Figma"
          style={{ width: "120px", height: "18px" }}
        />
      </div>
      <div className={classes.statusBar__time}>{props.time}</div>
      <div>
        <img
          src={props.statusBarBatteryLevelSvg}
          alt="BatteryLevel"
          style={{ width: "90px", height: "18px" }}
        />
      </div>
    </div>
  );
}

export default StatusBar;
