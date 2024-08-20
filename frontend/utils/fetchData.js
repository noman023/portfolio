import axios from "axios";

export async function fetchData(endpoint = "") {
  const res = await axios.get(
    `https://portfolio-backend-nu-one.vercel.app/${endpoint}`
  );

  return res.data;
}
