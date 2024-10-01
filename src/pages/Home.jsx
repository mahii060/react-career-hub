import CategoryList from "../components/CategoryList/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="my-24">
            <h1 className="3xl">This is home</h1>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;