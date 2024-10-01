import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="text-center">
            <h1 className="text-3xl">Featured Jobs here: {jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols1 ms:grid-cols-2 lg:grid-cols-3 gap-15">
                {jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)}
            </div>
        </div>
    );
};

export default FeaturedJobs;