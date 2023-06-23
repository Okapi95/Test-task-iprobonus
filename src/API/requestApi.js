import axios from "axios";

const requestGetAccessToken = () => {
  return axios
    .post(
      "http://84.201.188.117:5021/api/v3/clients/accesstoken",
      {
        idClient: "{2c44d8c2-c89a-472e-aab3-9a8a29142315}",
        accessToken: "",
        paramName: "device",
        paramValue: "{7db72635-fd0a-46b9-813b-1627e3aa02ea}",
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      },
      {
        headers: {
          AccessKey: "891cf53c-01fc-4d74-a14c-592668b7a03c",
        },
      }
    )
    .then((response) => {
      return response.data.accessToken;
    })
    .catch((error) => {
      console.log(error);
    });
};

const requestGetBonus = (
  accessToken,
  setNumberOfBonuses,
  setDateBurning,
  setBurningBonuses
) => {
  axios
    .get(
      `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`,
      {
        headers: {
          AccessKey: "891cf53c-01fc-4d74-a14c-592668b7a03c",
        },
      }
    )
    .then((response) => {
      setNumberOfBonuses(response.data.data.currentQuantity);
      setBurningBonuses(response.data.data.forBurningQuantity);

      const date = new Date(response.data.data.dateBurning);
      const burningDate = date.getDate();
      const burningMonth = date.getMonth() + 1;
      setDateBurning(
        burningDate +
          "." +
          (burningMonth < 10 ? "0" + burningMonth : burningMonth)
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export { requestGetAccessToken, requestGetBonus };
