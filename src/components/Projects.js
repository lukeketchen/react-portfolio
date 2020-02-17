import React from 'react';
import ProjectPost from './ProjectPost';
import ProjectCountdown from './ProjectCountdown';
import ProjectPortfolio from './ProjectPortfolio';
import SocialButterfly from './projects/SocialButterfly';

const Projects = () => (
  <div className='projects'>
    <div className='col1'>
      <SocialButterfly />
      <ProjectCountdown />
    </div>
    <div className='mid'>
      <div className='midtext'>
        <h4>Most Recent</h4>
      </div>
      <div className='midline'></div>
    </div>
    <div className='col2'>
      <ProjectPortfolio />
      <ProjectPost />
    </div>
  </div>
);

export default Projects;
