

function About() {
    return (
        <section id="about" className="flex flex-col tablet:flex-row items-start justify-center gap-6 w-full px-4">
            <div className="w-full font-bold tablet:w-[30%] text-center tablet:text-left text-2xl tablet:text-4xl font-serif italic">
            about me
            </div>
            <div className="w-full tablet:w-[70%] text-sm tablet:text-base leading-relaxed text-left text-gray-100">
                I`m Faris, a software engineer who enjoys building websites and web apps that look good and work smoothly. <br/>
                I focus mostly on the front end — the part users see and interact with — and I enjoy turning ideas into real, 
                usable designs. <br/>
                Whether it`s a personal project or part of a team, 
                I care about clean design, simple user experience, and writing code that works well.
            </div>
        </section>
    );
}

export default About;
