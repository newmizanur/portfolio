/**
 *
 * Project
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ProjectWrapper from './Wrapper';


function Project(props) {
  return (
    <ProjectWrapper>
      <div>{props.project.name}</div>
      <div>{props.project.title}</div>
      <div>{props.project.description}</div>
    </ProjectWrapper>
  );
}

Project.propTypes = {
  project: PropTypes.object
};

export default Project;
