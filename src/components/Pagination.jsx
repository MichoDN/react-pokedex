import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/currentPage.slice';

const Pagination = ({ totalPosts, postPerPage }) => {
    const dispatch = useDispatch();
    let currentPage = useSelector(state => state.currentPage)
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) pages.push(i);

    const displayPages = pages.filter((page) => page <= currentPage + 2 && page >= currentPage - 2)

    const setActualPagination = (page) => dispatch(setCurrentPage(page))

    return (
        <div>
            {displayPages.map((page, i) => (
                <button
                    className='pagination'
                    key={i}
                    onClick={() => setActualPagination(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;