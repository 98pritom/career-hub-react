import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { id, company_name, job_title, logo, salary, job_type, location, remote_or_onsite } = job;
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (
        <div className="card card-border bg-base-100 min-w-80 min-h-70">
            <div className="card-body">
                <img src={logo} alt={company_name} className='w-26' />
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <span>{remote_or_onsite}</span>
                    <span>{job_type}</span>
                </div>
                <div className="card-actions justify-start">
                    <span>{location}</span>
                    <span>{salary}</span>
                </div>
                <button onClick={() => handleDetails(id)} className='btn bg-purple-700 w-30'>View Details</button>
            </div>
        </div>
    );
};

export default JobCard;