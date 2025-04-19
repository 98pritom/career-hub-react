import React, { useEffect, useState } from 'react';
import { getStoredList } from '../../utilities/addToDb';
import { useLoaderData } from 'react-router-dom';
import ListedJobs from '../ListedJobs/ListedJobs';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const allJobs = useLoaderData();
    useEffect(() => {
        const stored = getStoredList();
        setAppliedJobs(stored);
    }, []);

    const listedJobs = allJobs.filter(job => appliedJobs.includes(job.id));


    return (
        <div className='w-8/12 mx-auto'>
            <h2>Applied Jobs: {listedJobs.length}</h2>
            <div>
                {
                    listedJobs.map(job => <ListedJobs key={job.id} job={job} ></ListedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;