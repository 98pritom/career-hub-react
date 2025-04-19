import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default FeaturedJobs;