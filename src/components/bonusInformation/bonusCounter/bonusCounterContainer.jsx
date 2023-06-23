import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  requestGetAccessToken,
  requestGetBonus,
} from "../../../API/requestApi";

import BonusCounter from "./bonusCounter";

function BonusCounterContainer() {
  const [numberOfBonuses, setNumberOfBonuses] = useState(<FaSpinner />);
  const [dateBurning, setDateBurning] = useState(<FaSpinner />);
  const [burningBonuses, setBurningBonuses] = useState(<FaSpinner />);

  useEffect(() => {
    requestGetAccessToken().then((accessToken) =>
      requestGetBonus(
        accessToken,
        setNumberOfBonuses,
        setDateBurning,
        setBurningBonuses
      )
    );
  }, []); // вместо пустого массива можно передавать bonusNumber (если на странице появится какая-то логика, которая будет изменять bonusNumber - useEffect обновит компонент с актуальными данными)

  return (
    <BonusCounter
      numberOfBonuses={numberOfBonuses}
      dateBurning={dateBurning}
      burningBonuses={burningBonuses}
    />
  );
}

export default BonusCounterContainer;
