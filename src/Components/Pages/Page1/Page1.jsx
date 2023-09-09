import React, { useEffect } from "react";
import { useApiCall } from "../../../Assets/hooks";
import { TailSpin } from "react-loader-spinner";

const Page1 = () => {
  const [apiData, loading, setApiData, callAPI] = useApiCall();

  console.log("apiData", apiData);

  useEffect(() => {
    if (apiData?.job && apiData?.job !== "") {
      alert("there is change in job ");
    }
  }, [apiData?.job]);

  return (
    <div className="container" style={{ fontSize: "100px" }}>
      {loading ? <TailSpin /> : null}
      {apiData?.createdAt}
      <button
        onClick={() =>
          callAPI("https://reqres.in/api/users", {
            name: "morpheus",
            job: "leader",
          })
        }
      >
        {" "}
        Call API
      </button>
      <button
        onClick={() =>
          callAPI("https://reqres.in/api/users", {
            name: "morpheus",
            job: "leader",
          })
        }
      >
        {" "}
        Click ME
      </button>
    </div>
  );
};

export default Page1;
