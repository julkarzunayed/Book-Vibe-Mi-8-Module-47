import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getItemsFromLocalStorage } from '../../utility/addToLocalStorage';
import BookDetails from '../BookDetails/BookDetails';
import Book from '../Book/Book';

const ListedBook = () => {
    const [readBooks, setReadBooks] = useState([]);
    const booksData = useLoaderData();
    useEffect(() => {
        const readBooksFromLocalStorage = getItemsFromLocalStorage();
        const readBooksIdNumbered = readBooksFromLocalStorage.map(id => Number(id))
        const readBookList = booksData.filter(book => readBooksIdNumbered.includes(book.bookId) )
        setReadBooks(readBookList)
    },[])
    return (
        <div>
            <h1 className='text-center p-6 my-10 bg-base-200 rounded-2xl font-bold text-4xl'>Books</h1>
            <button className='btn'> Srotkjk</button>

            <div className="my-16">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readBooks.map(book => <Book
                                key={book.bookId}
                                book={book}></Book>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ListedBook;