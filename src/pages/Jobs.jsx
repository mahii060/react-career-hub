import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const Jobs = () => {
    const jobs = useLoaderData()

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied);
        }
    }, [])

    return (
        <div>
            <h1 className="3xl">Jobs i applied for</h1>
        </div>
    );
};

export default Jobs;