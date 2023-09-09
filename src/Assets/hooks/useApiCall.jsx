import { useEffect, useState } from "react";

const useApiCall = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const callAPI = async (controller, reqBody = {}) => {
    setLoading(true);
    try {
      const res = await fetch(controller, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      if (res?.status === 500) {
        alert("Something went wrong");
      } else {
        const apiResp = await res.json();
        setData(apiResp);
      }
    } catch (error) {
      alert("An error occurred while fetching data");
    }
    setLoading(false);
  };
  return [data,loading, setData, callAPI];
};

export default useApiCall;
