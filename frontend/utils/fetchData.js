import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(endpoint = "") {
  const res = await axios.get(`${baseUrl}/${endpoint}`);

  return res.data;
}
