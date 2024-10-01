import { useLoaderData, useParams } from "react-router-dom";

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const jobs = useLoaderData()
    const job = jobs.find(job => job.id === idInt);
    const { job_title, location, salary, job_description, job_responsibility, educational_requirements, experiences } = job;
    const { contact_information } = job;
    const { email, phone } = contact_information;

    const handleApplyNow = id => {
        saveJobApplication(id)
        toast.success('You successfully applied for the job!')
    }

    return (
        <div className="my-12">
            <h1 className="text-4xl text-center font-bold my-12 border-b-2 pb-2">Job details</h1>
            <div className="grid space-x-8 md:grid-cols-4">
                <div className="col-span-3 space-y-6 text-justify">
                    <p className="text-lg"><span className="font-bold">Job description</span>: {job_description}</p>
                    <p className="text-lg"><span className="font-bold">Job responsibility</span>: {job_responsibility}</p>
                    <p className="text-lg"><span className="font-bold">Educational Requirements</span>: {educational_requirements}</p>
                    <p className="text-lg"><span className="font-bold">Experiences</span>: {experiences}</p>
                </div>
                <div className="col-span-1 ">
                    <div className="border p-5 rounded-lg bg-violet-50">
                        <div className="space-y-6 mb-8">
                            <h2 className="text-2xl text-center border-b-2 font-extrabold pb-6">Job details</h2>
                            <p className='flex items-center text-lg text-gray-800'>
                                <AiOutlineDollar className='text-2xl mr-2 text-violet-800' />
                                <span>
                                    <span className="font-bold">Salary: </span>
                                    <span className="text-gray-500">{salary}</span>
                                </span>
                            </p>
                            <p className='flex items-center text-lg text-gray-800 mb-24'>
                                <IoCalendarOutline className='text-2xl mr-2 text-violet-800' />
                                <span>
                                    <span className="font-bold">Job Title: </span>
                                    <span className="text-gray-500">{job_title}</span>
                                </span>
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl text-center border-b-2 pb-6 font-extrabold">Contact Information</h2>
                            <p className='flex items-center text-lg text-gray-800 mb-24'>
                                <FaPhone className='text-2xl mr-2 text-violet-800' />
                                <span>
                                    <span className="font-bold">Phone: </span>
                                    <span className="text-gray-500">{phone}</span>
                                </span>
                            </p>
                            <p className='flex items-center text-lg text-gray-800 mb-24'>
                                <MdOutlineEmail className='text-2xl mr-2 text-violet-800' />
                                <span>
                                    <span className="font-bold">Email: </span>
                                    <span className="text-gray-500">{email}</span>
                                </span>
                            </p>
                            <p className='flex items-center text-lg text-gray-800 mb-24'>
                                <IoLocationOutline className='text-2xl mr-2 text-violet-800' />
                                <span>
                                    <span className="font-bold">Location: </span>
                                    <span className="text-gray-500">{location}</span>
                                </span>
                            </p>

                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <button onClick={() => handleApplyNow(id)} className="w-full btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;