import { postApi } from "@/services";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProductsList = createAsyncThunk(
  "product/fetchList",
  async (categories, type_id = 1) => {
    const response = await postApi.client.getAllPosts({
      type_id: type_id,
      include: "categories,type",
      //   categories: categories,
    });
    return response.data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/detail",
  async (id, include = 'type,categories') => {
    const response = await postApi.server.getPostById({
      id,
      include,
    });

    return response.data;
  }
);

const initialState = {
  isLoading: false,
  products: [],
  isLoadingDetail: false,
  product: {},
  error: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
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

export default productSlice.reducer;
