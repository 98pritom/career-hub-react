import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/addToDb';

const Details = () => {
    const allJobs = useLoaderData();
    console.log(allJobs);
    const { jobId } = useParams();
    const currentPageInt = parseInt(jobId);

    const selectedJob = allJobs.find(job => job.id === currentPageInt);

    const { id, educational_requirements, job_responsibility, job_description, experiences, salary, job_title, contact_information } = selectedJob;

    const handleApplyNow = (id) => {
        addToDb(id);
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold mb-10'>Job Details</h2>
            <div className='w-8/12 mx-auto flex'>
                <div className='w-8/12 space-y-6'>
                    <p><span className='text-lg font-bold'>Job Description:</span> {job_description}</p>
                    <p><span className='text-lg font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className='text-lg font-bold'>Educational Requirement:</span> {educational_requirements}</p>
                    <p><span className='text-lg font-bold'>Experience:</span> {experiences}</p>
                </div>
                <div className='w-4/12'>
                    <div className='bg-gray-700 p-5 rounded-lg'>
                        <h2>Job Details</h2>
                        <div className="divider m-0 py-2"></div>
                        <div>
                            <p>Salary: {salary}</p>
                            <p>Job Title: {job_title}</p>
                        </div>
                        <h2>Contact Information</h2>
                        <div className="divider m-0 py-2"></div>
                        <div>
                            <p>Phone: {contact_information.phone}</p>
                            <p>Email: {contact_information.email}</p>
                            <p>Address: {contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={() => handleApplyNow(id)} className='btn w-full bg-purple-700 rounded-lg mt-2'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;