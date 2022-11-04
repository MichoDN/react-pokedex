import { configureStore } from '@reduxjs/toolkit'
import currentPageSlice from './slices/currentPage.slice'
import selectedListSlice from './slices/selectedList.slice'
import selectedTypeSlice from './slices/selectedType.slice'
import postPerPageSlice from './slices/postPerPage.slice'
import userNameSlice from './slices/userName.slice'
import currentSearchSlice from './slices/currentSearch.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        selectedList: selectedListSlice,
        selectedType: selectedTypeSlice,
        currentPage: currentPageSlice,
        postPerPage: postPerPageSlice,
        currentSearch: currentSearchSlice
    }
})
