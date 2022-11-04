import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/currentPage.slice';

const Pagination = ({ totalPosts, postPerPage }) => {
    const dispatch = useDispatch();
    let currentPage = useSelector(state => state.currentPage)
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) pages.push(i);

    const setActualPagination = (page) => {
        dispatch(setCurrentPage(page))
    }

    const pagShower = (page) => {
        if (page > currentPage + 2) return "none" 
        else if (page < currentPage - 2) return "none"
    }
    return (
        <div>
            {pages.map((page, i) => (
                <button
                    className='pagination'
                    key={i}
                    onClick={() => setActualPagination(page)}
                    style={{display:pagShower(page), width:"5rem"}}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;