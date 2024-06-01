import ProductList from "@/components/product/ProductList"
import Banner from "./Banner"
import { widgetApi } from "@/services"

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