import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAllData } from "./dataSlice";

export const useGetData = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 12 * page,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const getData = async () => {
    const data = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const json = await data.json();
    dispatch(addAllData(json));
    setLoading(false);
    return json;
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 <
      document.documentElement.scrollHeight
    ) {
      return;
    }

    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    getData();
  }, [page]);
};
