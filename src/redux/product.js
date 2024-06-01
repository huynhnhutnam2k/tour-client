import { postApi } from "@/services";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProductsList = createAsyncThunk(
  "product/fetchList",
  async (payload) => {
    const { type_id, categories, orderBy } = payload
    const response = await postApi.client.getAllPosts({
      query: {
        type_id: type_id,
        cat: categories.join(", "),
        orderBy
      },
      include: "categories,type",
    });
    return response.data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/detail",
  async (id, include = "type,categories") => {
    const response = await postApi.server.getPostById({
      id,
      include,
    });

    return response.data;
  }
);

const initialState = {
  isLoading: false,
  categories: [],
  products: [],
  isLoadingDetail: false,
  product: {},
  error: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleToggleCategory: (state, action) => {
      let cate = [...state.categories];
      if (cate.includes(action.payload)) {
        cate = cate.filter((item) => item !== action.payload);
      } else {
        cate.push(action.payload);
      }

      return {
        ...state,
        categories: cate,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoadingDetail = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoadingDetail = false;
        state.product = action.payload;
      });
  },
});

export const { handleToggleCategory } = productSlice.actions;
export default productSlice.reducer;
