import { Link, Navigate } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           
                <h1 className="text-9xl mt-36 text-center">404</h1>
                <h2 className="text-3xl mt-10 text-center text-red-400">Page Not Found</h2>
                <Link className="mt-5" to='/'><button className="btn">Home</button></Link>
                
    
        </div>
    );
};

export default ErrorPage;