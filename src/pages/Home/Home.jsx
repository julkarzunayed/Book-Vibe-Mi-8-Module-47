
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
    // console.log(bookData)
    return (
        <div>
            <Banner />
            
                <Books booksData={booksData}></Books>
   
        </div>
    );
};

export default Home;