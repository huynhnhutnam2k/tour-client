
import { axiosServer } from './httpConfig/http-server'

export const settingApi = {
    getSetting: (locale = null) => {
        return axiosServer.get('/settings', {
            headers: {
                Accept: 'application/json',
                locale: locale
            }
        })
        
    },
};
