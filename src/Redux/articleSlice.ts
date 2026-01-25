import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Article } from "../Data/articles";
import { articles } from "../Data/articles";

interface ArticleState {
  articles: Article[];
  currentPage: number;
  articlesPerPage: number;
}

const initialState: ArticleState = {
  articles,
  currentPage: 1,
  articlesPerPage: 6,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
   
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;



    },
  },
});


export const { setCurrentPage } = articleSlice.actions;
export default articleSlice.reducer;
