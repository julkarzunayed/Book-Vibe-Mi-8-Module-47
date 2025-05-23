import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ListedBook from '../pages/ListedBook/ListedBook';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("/data/booksData.json"),
                path: "/",
                Component: Home,
            },
            {
                path: "/listedBooks",
                loader: () => fetch("/data/booksData.json"),
                Component: ListedBook
            },
            {
                path: "/bookDetails/:Id",
                loader: () => fetch("/data/booksData.json"),
                Component: BookDetails,
            }

        ]
    },
])