
const Banner = () => {
    return (
        <div className="hero h-[600px] bannerBg">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/public/mypic.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="pl-10">
                    <h1 className="text-5xl font-bold text-white">Hi, I am Khairul Basher</h1>
                    <p className="py-6 text-white text-lg">I am an enthusiastic web developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer.</p>
                    <button className="btn btn-primary">Contact Me</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;