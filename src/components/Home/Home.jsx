import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/banner.png'
const Home = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            <img className='lg:max-w-7xl mx-auto mt-10' src={banner} alt="" />
        </div>
    );
};

export default Home;