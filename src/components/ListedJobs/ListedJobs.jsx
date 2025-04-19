import React from 'react';
import { Link } from 'react-router-dom';

const ListedJobs = ({ job }) => {
    const { id, salary, job_type, location, remote_or_onsite, company_name, job_title, logo } = job;
    return (
        <div className="card bg-base-100 shadow-sm mb-2">
            <div className='flex'>
                <div className='flex'>
                    <figure className='p-5'>
                        <img
                            src={logo}
                            alt={company_name} className='w-36 h-36 object-contain' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {job_title}
                        </h2>
                        <p>{company_name}</p>
                        <div className="">
                            <span className="border border-green-400 rounded px-4 mr-5">{remote_or_onsite}</span>
                            <span className="border border-green-400 px-4 rounded">{job_type}</span>
                        </div>
                        <div>
                            <span className='mr-5'>{location}</span>
                            <span>Salary: {salary}</span>
                        </div>
                        <Link to={`/details/${id}`}><button className='btn'>Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListedJobs;