import { API_URLS } from "@/constants";
import { axiosServer } from "./httpConfig";

export const categoryApi = {
  server: {
    async getAllCategories({ query, include = "" }) {
      try {
        const response = await axiosServer.get(API_URLS.CATEGORY.CATEGORIES, {
          params: {
            ...query,
            include,
          },
        });
        return response;
      } catch {
        return null;
      }
    },
  },
};
