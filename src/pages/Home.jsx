import CategoryList from "../components/CategoryList/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import bannerImage from "../assets/images/user.png"

const Home = () => {
    return (
        <div className="">
            <div className="lg:flex justify-between items-center rounded-b-xl bg-violet-50 lg:px-12">
                <div>
                    <h1 className="text-5xl font-bold leading-tight">
                        <span>One Step</span>
                        <br />
                        <span>Closer To Your</span>
                        <br />
                        <span className="text-violet-500">Dream Job</span>
                    </h1>
                    <p className="my-6">Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                    <button className="btn btn-info">Get Started</button>
                </div>
                <div>
                    <img className="w-full lg:w-2/3" src={bannerImage} alt="Banner Image" />
                </div>
            </div>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;