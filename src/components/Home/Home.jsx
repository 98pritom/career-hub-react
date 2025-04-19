
import { useState } from 'react';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategoriesList from '../JobCategoriesList/JobCategoriesList';


const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategorySelect = (handleCategorySelect) => {
        setSelectedCategory(handleCategorySelect);
    }
    console.log(selectedCategory);

    return (
        <div>
            <Banner></Banner>
            <JobCategoriesList onCategorySelect={handleCategorySelect}></JobCategoriesList>
            <FeaturedJobs selectedCategory={selectedCategory}></FeaturedJobs>
        </div>
    );
};

export default Home;