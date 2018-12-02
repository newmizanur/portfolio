/**
 *
 * ProjectsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProjects from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadProjects } from './actions';
import Project from '../../components/Project';
import ProjectWrapper from '../../components/Project/Wrapper';
import ProjectsWrapper from './Wrapper';


/* eslint-disable react/prefer-stateless-function */
export class ProjectsPage extends React.Component {
  componentDidMount() {
    console.log('ProjectsPage componentDidMount');
    this.props.dispatch(loadProjects());
  }

  render() {
    // console.log('Render projects',this.props.projects);
    let content = <ProjectWrapper />;
    if (this.props.projects && this.props.projects.length > 0) {
      content = this.props.projects.map(project => (
        <Project key={project.name} project={project}/>
      ));
    }
    return (
      <div>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="My Projects" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <ProjectsWrapper>{content}</ProjectsWrapper>
      </div>
    );
  }
}

ProjectsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'projectsPage', reducer });
const withSaga = injectSaga({ key: 'projectsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsPage);
