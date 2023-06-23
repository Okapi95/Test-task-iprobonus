import React from "react";
import classes from "./bonusPage.module.less";

import ColourBlock from "../accentColourBlock/accentColourBlock";
import BonusInformation from "../bonusInformation/bonusInformation";
import StatusBarContainer from "../statusBar/statusBarContainer";

function BonusPage() {
  return (
    <div className={classes.bonusPage}>
      <div className={classes.bonusPage__container}>
        <StatusBarContainer />
        <BonusInformation />
      </div>
      <ColourBlock />
    </div>
  );
}

export default BonusPage;
