import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header></Header>
                <div className="min-h-[calc(100vh-288px)]">
                    <Outlet />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
// <div className="max-w-7xl mx-auto h-[calc(100vh-68px )]">
// </div>