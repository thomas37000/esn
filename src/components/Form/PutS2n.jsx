import axios from "axios";

const PutS2n = (infos, id) => {
  const { REACT_APP_SERVER_ADDRESS } = process.env;

  axios
    .put(`${REACT_APP_SERVER_ADDRESS}/s2n/${id}`, {
      s2n_name: infos.names,
      rate: Number(infos.rates),
      images: infos.images,
      infos: infos.infos,
      citie_name: infos.cities,
      year: infos.dates,
    })
    .then(() => alert("S2n Modifiée !"))
    .catch((error) => {
      console.error(error.message);
    });
};

export default PutS2n;
