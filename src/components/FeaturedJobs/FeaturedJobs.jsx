import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="">
            <h1 className="text-center text-6xl font-bold mt-12">Featured Jobs</h1>
            <p className="text-center text-lg my-8 text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)}
            </div>
            <div className="flex justify-center my-5">
                <button
                    onClick={() => setDataLength(dataLength === 4 ? jobs.length : 4)}
                    className="btn btn-primary"
                >
                    {dataLength === 4 ? "Show All" : "Show Less"}
                </button>
            </div>
        </div>

    );
};

export default FeaturedJobs;