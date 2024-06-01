export const createLinkPost = (post) => {
    return `/${post?.type?.data?.slug}/${post.slug}-${post.id}`
}

export const calcDiscount = (post) => {
    if(!post?.product?.discount?.config) {
        return post?.product?.price
    }
    const isPercent = post.product.discount?.config?.[0]?.style === 'percent'
    let discount
    if(isPercent) {
        discount = post?.product?.price * (post.product.discount?.config?.[0]?.discount / 100)
    } else {
        discount = post.product.discount?.config?.[0]?.discount
    }

    return post?.product?.price - discount
}