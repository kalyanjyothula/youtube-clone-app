import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    // method: "GET",
  //   url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "13777777efmsh5c9a486d2c8d117p16719cjsn79ff0cef3f0e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

fetchData.propTypes = {};

// export default fetchData;
