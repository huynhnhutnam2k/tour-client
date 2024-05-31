import { QUERY_KEYS } from "@/constants";
import { postApi } from "@/services/post-api";
import useSWR from "swr";

export function usePost({ params, options }) {
    const swrResponse = useSWR(
      [QUERY_KEYS.POST.GET_POST, params],
      () => postApi.client.getAllPosts(params),
      {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        revalidateOnFocus: false,
        ...options,
      }
    );
  
    return swrResponse;
  }
  