import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "d2f77fcebc9f245e8";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((results) => setData(results));
    };
    fetchdata();
  }, [term]);

  return { data };
};
export default useGoogleSearch;
