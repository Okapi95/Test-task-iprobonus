import React from "react";
import classes from "./bonusInformation.module.less";
import bonusInformationLogoISvg from "../../icons/bonusInformationLogo-I.svg";
import BonusCounterContainer from "./bonusCounter/bonusCounterContainer";

function BonusInformation() {
  return (
    <div className={classes.bonusInformation}>
      <div className={classes.bonusInformation__textAndLogo}>
        <div className={classes.bonusInformation__text}>ЛОГОТИП</div>
        <div className={classes.bonusInformation__logotype}>
          <img
            src={bonusInformationLogoISvg}
            alt="logotype"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>

      <BonusCounterContainer />
    </div>
  );
}

export default BonusInformation;
