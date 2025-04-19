import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategoriesList = ({ onCategorySelect }) => {
    // const categories = ['Account & Finance', 'Creative Design', 'Marketing & Sales', 'Engineering Job'];
    const [jobCategories, setJobCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, []);

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold mb-5'>Job Category</h2>
            <div className='flex justify-center'>
                {
                    jobCategories.map((category) => <Category
                        key={category.id}
                        category={category}
                        onCategorySelect={() => onCategorySelect(category.category_name)}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategoriesList;