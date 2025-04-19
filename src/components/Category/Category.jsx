import React from 'react';

const Category = ({ category, onCategorySelect }) => {
    const { availability, category_name, logo } = category;
    return (
        <div onClick={onCategorySelect}
            className="card w-56 bg-base-100 card-sm shadow-sm p-5 mx-10 hover:bg-gray-700">
            <img src={logo} className='w-16' alt="" />
            <div className="card-body p-0">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Category;