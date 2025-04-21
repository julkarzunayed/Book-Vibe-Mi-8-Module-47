import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({ book }) => {
    const { bookName, image, author, tags, rating, category, bookId } = book;
    
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='border flex flex-col gap-1 border-gray-200 rounded-2xl p-6'>
                <div className="p-8 flex justify-center bg-gray-200 rounded-2xl">
                    <img className='h-40' src={image} alt="" />
                </div>

                <div className="mt-6">
                    {
                        tags.map((tag, index) => <span
                            key={index}
                            className='mr-2 font-medium bg-gray-200 rounded-2xl text-green-600 py-[6px] px-4'>{tag}</span>)
                    }
                </div>
                <div className="flex-1">
                    <h3 className='text-2xl font-bold my-4'>{bookName}</h3>
                    <p className=''><small>By :  {author}</small></p>
                </div>
                <hr className=' border-t border-dashed border-gray-200 my-4' />
                <div className="flex justify-between">
                    <h5 className=''>{category}</h5>
                    <h4 className='flex gap-2.5 items-center'>{rating} <FaStarHalfStroke />
                    </h4>
                </div>
            </div>
        </Link>
    );
};

export default Book;