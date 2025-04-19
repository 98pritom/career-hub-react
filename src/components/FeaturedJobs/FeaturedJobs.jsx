import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = ({ selectedCategory }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const filteredJobs = jobs.filter(job => job.category_name === selectedCategory);
    console.log(filteredJobs);

    return (
        <div className='mt-15'>
            <h2 className='text-center font-semibold text-2xl mt-5'>Featured Jobs</h2>
            <p>{selectedCategory}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto px-4'>
                {
                    selectedCategory === 'all' ? jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
                        : filteredJobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;