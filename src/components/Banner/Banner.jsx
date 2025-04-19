import user from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={user}
                    className="max-w-sm rounded-lg " />
                <div className=''>
                    <div className="text-5xl font-bold"><p>One Step</p>
                        <p className='mt-5'>Closer To your</p>
                        <p className='mt-2 text-purple-500'>Dream Job.</p>
                    </div>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus ipsam ipsa architecto eligendi ducimus quam voluptates ullam fuga quos.</p>

                    <button className="btn btn-primary mt-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;