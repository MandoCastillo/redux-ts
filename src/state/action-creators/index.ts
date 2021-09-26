import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const {data} = await axios.get<RepositoriesResponse>('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.map(result => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });

    } catch (err) {
      if (axios.isAxiosError(err)) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        });
      }

    }
  };
};

interface RepositoriesResponse {
  objects: Object[];
  total: number;
  time: string;
}

interface Object {
  package: Package;
  score: Score;
  searchScore: number;
}

interface Package {
  name: string;
  scope: Scope;
  version: string;
  description: string;
  keywords?: string[];
  date: Date;
  links: Links;
  publisher: Publisher;
  maintainers: Publisher[];
  author?: Author;
}

interface Author {
  name: string;
  email?: string;
  username?: string;
  url?: string;
}

interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

interface Publisher {
  username: string;
  email: string;
}

 enum Scope {
  Unscoped = 'unscoped',
}

interface Score {
  final: number;
  detail: Detail;
}

interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
