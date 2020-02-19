import React from 'react';
import { connect } from "react-redux";
import ProjectPost from './ProjectPost';

const Projects = ({projects}) => (
  <div className='projects'>
    {projects && projects.slice(0).reverse().map((project)=>{
      return(
        <ProjectPost key={project.id}  project={project}/>
    )
    })}
    
  </div>
);

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(Projects);
