import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: { offset: 0, limit: 12, pages: [] },
  reducers: {
    setPages(state, actions) {
      const {limit} = state
      let { offset, pokemonCount } = actions.payload;
      if (offset === null) {
        offset = 0;
      } 

      const pagesCount = Math.ceil(pokemonCount / limit);

      const pages = { count: pagesCount, list: [] }
      for (let i = 0; i < pagesCount; i++) {
        pages.list.push(i + 1);
      }

      const currentPage = (offset / limit);
      const showedPages = pages?.list.filter((page) => {
        const initialPage = currentPage - 2
        if (initialPage <= 0) {
          return page <= currentPage + 2 - initialPage + 1
        } else return page <= currentPage + 3 && page >= currentPage - 1;
      })
      return { ...state, offset, pages: showedPages }
    }
  }
})

export const { setPages } = paginationSlice.actions;

export default paginationSlice.reducer;
