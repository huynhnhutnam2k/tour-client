import { API_URLS } from "@/constants";
import { axiosServer } from "./httpConfig";

export const seoApi = {
  server: {
    getSeoInfo({ url, locale = null }) {
      return axiosServer.get(`${API_URLS.SEO.SEO_INFO}`, {
        params: {
          url,
        },
        headers: {
          Accept: "application/json",
          locale,
        },
      });
    },
  },
};
