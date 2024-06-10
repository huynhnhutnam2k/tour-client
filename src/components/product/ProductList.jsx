"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsList } from "@/redux/product";

const ProductItem = dynamic(() => import('./ProductItem'))

const orderByList = [
  {
    title: "Mặc định",
    id: 1,
  },
  {
    title: "Giá cao",
    id: 2,
    type: "price",
    sort: "asc",
  },
  {
    title: "Giá thấp",
    id: 3,
    type: "price",
    sort: "desc",
  },
];

const ProductList = ({ isFilter = false }) => {
  const dispatch = useDispatch();
  const { categories, products, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const [orderBy, setOrderBy] = useState(orderByList[0]);
  useEffect(() => {
    const payload = {
      type_id: 1,
      categories,
    };
    if (orderBy.id !== 1) {
      payload.orderBy = `${orderBy.type}:${orderBy.sort}`;
    }
    dispatch(fetchProductsList(payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, orderBy]);

  return (
    <section className="product-list">
      <div className="container px-0 lg:px-20">
        {isFilter ? (
          <div className="flex justify-end gap-x-5 mt-5 mr-4 sm:mr-0">
            {orderByList.map((item, index) => (
              <div className="flex items-center gap-x-2" key={index}>
                <input
                  type="radio"
                  name={item.title}
                  checked={item.id === orderBy?.id}
                  onChange={() => setOrderBy(item)}
                  className="w-5 h-5"
                />
                <label htmlFor={item.title} className="text-[15px] font-normal">{item.title}</label>
              </div>
            ))}
          </div>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductItem product={product} isLoading={isLoading} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
