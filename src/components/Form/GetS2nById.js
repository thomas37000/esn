import axios from "axios";

const GetS2nById = ({ setDatas, id }) => {
  const { REACT_APP_SERVER_ADDRESS } = process.env;

  axios
    .get(`${REACT_APP_SERVER_ADDRESS}/s2n/${id}`)
    .then((res) => {
      setDatas(res.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetS2nById;
