import React from "react";
import statusBarFigmaSvg from "../../icons/statusBarFigma.svg";
import statusBarBatteryLevelSvg from "../../icons/statusBarBatteryLevel.svg";

import StatusBar from "./statusBar";

function StatusBarContainer() {
  const data = new Date();
  const time = data.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <StatusBar
      time={time}
      statusBarFigmaSvg={statusBarFigmaSvg}
      statusBarBatteryLevelSvg={statusBarBatteryLevelSvg}
    />
  );
}

export default StatusBarContainer;
