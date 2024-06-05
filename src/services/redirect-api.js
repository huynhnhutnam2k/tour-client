import { axiosServer } from "./httpConfig";

export const redirectApi = {
    server: {
        getRedirectByUrl: async (source) => {
            try {
                const response = await axiosServer.get(
                    "redirects",
                    {
                        params: { source },
                    },
                );
    
                return response.data?.length ? response.data[0] : null;
            } catch (e) {
                return null;
            }
        },
    }
};
