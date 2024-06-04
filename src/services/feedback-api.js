import { API_URLS } from "@/constants"
import { axiosClient } from "./httpConfig"

export const feedbackApi = {
    client: {
        createFeedback: (payload) => {
            return axiosClient.post(API_URLS.FEEDBACK.FEEDBACK, payload)
        }
    }
}