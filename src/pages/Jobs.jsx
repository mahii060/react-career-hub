import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import Job from '../components/Job/Job'
import { IoIosArrowDown } from "react-icons/io";

const Jobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
        }
    }, [])

    return (
        <div className="my-12">
            <div className="flex justify-end mb-8">
                <details className="dropdown dropdown-left">
                    <summary className="btn m-1">Filter <IoIosArrowDown size="24" /></summary>
                    <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>On site</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-y-6">
                {appliedJobs.map(job => <Job key={job.id} job={job}></Job>)}
            </div>
        </div>
    );
};

export default Jobs;