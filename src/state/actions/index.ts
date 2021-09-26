import { ActionType } from '../actions-types';

export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesActionError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  SearchRepositoriesAction
  | SearchRepositoriesActionSuccess
  | SearchRepositoriesActionError
