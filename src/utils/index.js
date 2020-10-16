import axios from "axios";
const getRandomItems = (arr, n) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const createRequestArr = (param, paramsArr) => {
  const baseUrl = "https://api.thecatapi.com/v1/images/search";
  const res = [];
  for (let parameter of paramsArr) {
    res.push(
      axios.get(baseUrl, {
        headers: {
          "x-api-key": process.env.REACT_APP_CATAPI_KEY,
        },
        params: {
          [param]: parameter,
        },
      })
    );
  }
  return res;
};

export default {
  getRandomItems,
  createRequestArr,
};
