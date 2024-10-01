import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="h-[calc(100vh-68px )]">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;