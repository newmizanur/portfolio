/*
 *
 * ProjectsPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Load the projects, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadProjects() {
  return {
    type: LOAD_PROJECTS,
  };
}

/**
 * Dispatched when the projects are loaded by the request saga
 *
 *
 * @return {object}      An action array with a type of LOAD_PROJECTS_SUCCESS passing the repos
 */
export function projectsLoaded(projects) {
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects,
  };
}

/**
 * Dispatched when loading the projects fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROJECTS_ERROR passing the error
 */
export function projectsLoadingError(error) {
  return {
    type: LOAD_PROJECTS_ERROR,
    error,
  };
}
