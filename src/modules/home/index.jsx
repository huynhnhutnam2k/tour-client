import dynamic from "next/dynamic"

import { widgetApi } from "@/services"

const Banner = dynamic(() => import('./Banner'))
const ProductList = dynamic(() => import('@/components/product/ProductList'))

const HomeModules = async () => {
    const bannerData = await widgetApi.server.getWidgetInfo({
        key: 'banner'
    })

  return (
    <div>
        <Banner data={bannerData?.banner?.data?.field}/>
        <ProductList isFilter/>
    </div>
  )
}

export default HomeModules