import { API_URLS } from "@/constants"
import { axiosClient } from "./httpConfig"

export const orderApi = {
    client: {
        createOrder(payload) {
            return axiosClient.post(API_URLS.ORDER.ORDER, payload)
        }
    }
}