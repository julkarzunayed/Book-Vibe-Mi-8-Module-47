import React from 'react';

import booksImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='grid  md:grid-cols-2 gap-5 mt-10 p-16 bg-base-200 rounded-3xl'>
            <div className="p-14">
                <div className="flex flex-col">
                    <h1 className='text-4xl font-bold'>Books to freshen up <br /> your bookshelf</h1>
                    <div>
                        <button className='btn btn-success mt-5'>View The List</button>
                    </div>
                </div>
            </div>
            <div className=" flex-1">
                <img className='w-full rounded-2xl' src={booksImage} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;