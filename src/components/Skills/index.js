import React from 'react';
import ProgressBar from './Progressbar';
import skills from '../../Assets/images/skills.jpg'
import Aos from "aos";
import 'aos/dist/aos.css';

function Skills() {
  const [viewPortEntered] = React.useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
       <div className="flex h-screen items-center" id="work"
        style={{ background: `transparent url(${skills}) no-repeat scroll center`, fontFamily: 'Roboto', backgroundSize: "cover",  backgroundAttachment: 'fixed' }}>
        <div className="container px-4 xl:px-4 md:px-6 sm:px-6 py-16 mx-auto ">
          <div className="flex items-center justify-start">
            <div className="w-full md:w-1/2">
              <div  data-aos="fade-right" className="lg:max-w-lg">
                <h1 className="text-2xl font-bold text-gray-800 uppercase lg:text-3xl py-4">PROFESSIONAL SKILLS</h1>
                <ProgressBar width="75%" skill='UI/UX DESIGN 75%' />
                <ProgressBar width="90%" skill='WEB DEVELOPMENT 75%' />
                <ProgressBar width="65%" skill='MARKETING 75%' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skills
