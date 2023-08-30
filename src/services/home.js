import { handlePromise } from "../helpers/utils";
import axiosClient from "./axiosClient";
import { getHomesUrl } from "../API";

export const getHomes = async (payload) => {
  //   alert(payload.token);
  console.log("payload", payload);
  const [err, response] = await handlePromise(
    axiosClient({
      url: getHomesUrl,
      method: "GET",
      params: {
        pageSize: payload.pageSize,
        pageNo: payload.pageNo,
      },
      headers: {
        "x-access-token": payload.token,
      },
      cancelToken: payload.cancelToken || null,
    })
  );

  if (err) {
    throw err;
  }

  return response.data.data;
};
