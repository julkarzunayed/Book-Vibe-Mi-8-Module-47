import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {
    return (
        <div className='my-16'>
            <h1 className='text-4xl font-bold  text-center mb-10'>Books</h1>
            <Suspense fallback={<h2 style={{ fontSize: '30px', textAlignLast: 'center' }}>Loading.....</h2>}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        booksData.map((book) => <Book
                            key={book.bookId}
                            book={book}>
                        </Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;