import { axiosServer } from "./httpConfig";

export const searchApi = {
    search: (query = {}, locale = null) => {
        return axiosServer.get("search", {
            params: query,
            headers: {
                Accept: 'application/json',
                locale: locale || null
            }
        });
    },
};
