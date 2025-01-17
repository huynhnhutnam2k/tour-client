import { axiosClient, axiosServer } from "./httpConfig";
import { API_URLS } from "@/constants";

export const widgetApi = {
  client: {
    getWidgetInfo({ key, locale = null }) {
      return axiosClient.get(`${API_URLS.WIDGET.WIDGET_INFO}`, {
        headers: {
          locale,
        },
        params: {
          key,
        },
      });
    },
  },
  server: {
    async getWidgetInfo({ key, locale = null }) {
      try {
        const response = await axiosServer.get(API_URLS.WIDGET.WIDGET_INFO, {
          headers: {
            locale,
          },
          params: { key },
        });
        return response.data;
      } catch {
        return null;
      }
    },
  },
};
