/*
 *
 * ProjectsPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import { DEFAULT_ACTION, LOAD_PROJECTS_SUCCESS } from './constants';

export const initialState = fromJS({ projects: [] });

function projectsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_PROJECTS_SUCCESS:
      return state.set('projects', action.projects);
    default:
      return state;
  }
}

export default projectsPageReducer;
