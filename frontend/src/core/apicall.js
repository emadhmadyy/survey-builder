import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const request = async ({
  route,
  method = "GET",
  body,
  isLogin = false,
  isImage = false,
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const headers = isImage
      ? {
          "Content-Type": "multipart/form-data",
          Authorization: isLogin
            ? ""
            : `Bearer ${localStorage.getItem("token")}`,
        }
      : {
          "Content-Type": "application/json",
          Authorization: isLogin
            ? ""
            : `Bearer ${localStorage.getItem("token")}`,
        };

    const response = await axios.request({
      url: route,
      method: method,
      data: body,
      headers: headers,
    });

    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};
