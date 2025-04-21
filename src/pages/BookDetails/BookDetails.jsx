import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const booksData = useLoaderData()
    const { Id } = useParams()
    const bookId = Number(Id)
    const bookDetails = booksData.find(book => book.bookId === bookId)

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetails;

    return (
        <div className="my-16">
            <div className='grid lg:grid-cols-2 gap-12 p-8 '>
                <div className="flex justify-center p-8 bg-gray-200 rounded-2xl">
                    <img className='max-h-[300px] md:max-h-[550px] ' src={image} alt="" />
                </div>
                <div className="flex flex-col gap-3 content-between">
                    <div className="">
                        <h2 className='text-[40px] font-bold'>{bookName}</h2>
                        <h4 className="text-xl font-medium text-gray-500">By : {author}</h4>
                    </div>
                    <div className="text-xl py-2 border-y-2 border-gray-200">{category}</div>
                    <div className="text-justify"><span className='font-bold'>Review : </span>{review}</div>
                    <div className="">
                        <span className='font-bold'>Tag : </span>
                        {
                            tags.map((tag, index) => <span
                                key={index}
                                className='ml-2 font-medium bg-gray-200 rounded-2xl text-green-600 py-[6px] px-4'>{tag}</span>)
                        }
                    </div>
                    <div className="">
                        <table className=' w-[250px]'>
                            <tbody >
                                <tr>
                                    <td>Number of Pages:</td>
                                    <td className='font-semibold'>{totalPages}</td>
                                </tr>
                                <tr>
                                    <td>Publisher:</td>
                                    <td className='font-semibold'>{publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year of Publishing:</td>
                                    <td className='font-semibold'>{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td>Rating:</td>
                                    <td className='font-semibold'>{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <button className='font-bold mr-3 btn bg-gray-200 text-black'>Read</button>
                        <button className='font-bold btn btn-info btn-action'>WishList</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                {/* <button onClick={()=> {history.back()}} className=''>Go Back</button> */}
                <Link to="/">
                    <span className='flex gap-2 bg-gray-200 hover:bg-green-200 text-gray-600 rounded-2xl px-3 py-1'>
                        <span className='text-[26px]'><MdOutlineKeyboardBackspace /> </span>
                        Go back</span>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;