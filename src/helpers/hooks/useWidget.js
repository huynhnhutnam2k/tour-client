import useSWR from "swr";
import { QUERY_KEYS } from "@/constants";
import { widgetApi } from "@/services/widget-api";

export function useWidget(params) {
  const swrResponse = useSWR(
    [QUERY_KEYS.WIDGET.GET_WIDGET, params],
    () => widgetApi.client.getWidgetInfo(params),
    {
      dedupingInterval: 30 * 1000, // 30s
      // next: { revalidate: 10 },
      revalidateIfStale: true,
      // ...options,
    }
  );

  return swrResponse;
}
