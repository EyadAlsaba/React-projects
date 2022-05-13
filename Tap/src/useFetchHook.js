import { useEffect, useState } from "react";

export const useFetch = (url) => {
  let [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let request = await fetch(url);
      let Response = await request.json();
      setData(Response);
    }
    getData();
  }, [url]);
  return data;
}