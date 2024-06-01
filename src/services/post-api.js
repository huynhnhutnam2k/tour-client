import { API_URLS } from "@/constants";
import { axiosClient, axiosServer } from "./httpConfig";

export const postApi = {
  client: {
    getAllPosts({ query, include }) {
      return axiosClient.get(API_URLS.POST.SEARCH, {
        params: {
          ...query,
          include,
        },
      });
    },
  },
  server: {
    async getAllPosts({ query, include }) {
      try {
        const response = await axiosServer.get(API_URLS.POST.POSTS, {
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
    async getPostById({ id, include }) {
      try {
        const response = await axiosServer.get(`${API_URLS.POST.POSTS}/${id}`, {
          params: {
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
