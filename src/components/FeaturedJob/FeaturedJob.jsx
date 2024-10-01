import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl py-3">
            <figure>
                <img
                    src={logo}
                    alt={company_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='font-extrabold px-5 py-2 border-2 rounded border-violet-500 text-violet-700 mr-4'>{remote_or_onsite}</button>
                    <button className='font-extrabold px-5 py-2 border-2 rounded border-violet-500 text-violet-700'>{job_type}</button>
                </div>
                <div className='flex my-5'>
                    <p className='flex items-center text-lg text-gray-600'><IoLocationOutline className='text-2xl mr-2' /> {location}</p>
                    <p className='flex items-center text-lg text-gray-600'><AiOutlineDollar className='text-2xl mr-2' /> Salary: {salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
FeaturedJob.propTypes = {
    job: PropTypes.object
}
export default FeaturedJob;