import React from 'react';

const Book = ({book}) => {
    // console.log(book)
    const {bookName, image, author, tags, rating} = book;
    return (
        <div className='border border-gray-200 rounded-2xl p-6'>
            <div className="p-8 flex justify-center bg-gray-200 rounded-2xl">
                <img className='h-40' src={image} alt="" />
            </div>
            <div className="mt-6">
                <div className="">
                    {
                        tags.map(tag => <span className='mr-2 font-medium bg-gray-200 rounded-2xl text-green-600 py-[6px] px-4'>{tag}</span>)
                    }
                </div>
                <div className="">
                    <h3 className='text-2xl font-bold my-4'>{bookName}</h3>
                    <p className=''><small>By :  {author}</small></p>
                </div>
                <hr className=' border-t border-dashed border-gray-200 my-4'/>
                <div className="flex justify-between">
                    <h5 className=''>Fiction</h5>
                    <h4 className=''>{rating}</h4>
                </div>
            </div>
        </div>
    );
};

export default Book;