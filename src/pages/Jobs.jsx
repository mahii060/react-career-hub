import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import Job from '../components/Job/Job'
import { IoIosArrowDown } from "react-icons/io";

const Jobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)

        }
    }, [])

    const handleFilterJob = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    return (
        <div className="my-12">
            <div className="flex justify-end mb-8">
                <details className="dropdown dropdown-left">
                    <summary className="btn m-1">Filter <IoIosArrowDown size="24" /></summary>
                    <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleFilterJob('all')}><a>All</a></li>
                        <li onClick={() => handleFilterJob('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterJob('onsite')}><a>On site</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-y-6">
                {displayJobs.map(job => <Job key={job.id} job={job}></Job>)}
            </div>
        </div>
    );
};

export default Jobs;