import React from "react";
import classes from "./bonusCounter.module.less";
import bonusInformationButtonSvg from "../../../icons/bonusInformationButton.svg";
import bonusInformationFireSvg from "../../../icons/bonusInformationFire.svg";

function BonusCounter(props) {
  return (
    <div className={classes.bonusCounter}>
      <div className={classes.bonusCounter__boldText}>
        {props.numberOfBonuses} бонусов
      </div>
      <div className={classes.bonusCounter__button}>
        <img
          src={bonusInformationButtonSvg}
          alt="button"
          style={{ width: "35px", height: "35px" }}
        />
      </div>
      <div className={classes.bonusCounter__bonusInfo}>
        {props.dateBurning} сгорит
        <img
          src={bonusInformationFireSvg}
          alt="fire"
          style={{ width: "13px", height: "17px", margin: "0 8px" }}
        />
        {props.burningBonuses} бонусов
      </div>
    </div>
  );
}

export default BonusCounter;
