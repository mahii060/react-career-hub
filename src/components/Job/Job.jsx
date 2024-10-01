import PropTypes from 'prop-types';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card lg:card-side bg-base-100 p-7 border">
            <figure>
                <img className='bg-gray-100 p-8 rounded-2xl object-cover lg:w-64 '
                    src={logo}
                    alt={company_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex'>
                    <button className='font-extrabold px-5 py-2 border-2 rounded border-violet-500 text-violet-700 mr-4'>{remote_or_onsite}</button>
                    <button className='font-extrabold px-5 py-2 border-2 rounded border-violet-500 text-violet-700'>{job_type}</button>
                </div>
                <div className='flex'>
                    <p className='flex items-center text-lg text-gray-600'>
                        <IoLocationOutline className='text-2xl mr-2' /> {location}
                    </p>
                    <p className='flex items-center text-lg text-gray-600'>
                        <AiOutlineDollar className='text-2xl mr-2' /> Salary: {salary}
                    </p>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='btn btn-primary'>View Details</button>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object,
}

export default Job;