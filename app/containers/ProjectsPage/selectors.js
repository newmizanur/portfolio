import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projectsPage state domain
 */

const selectProjects = state =>
  state.getIn(['projectsPage', 'projects'], initialState.projects);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProjectsPage
 */

const makeSelectProjects = () =>
  createSelector(selectProjects, substate => substate);

export default makeSelectProjects;
export { selectProjects };
