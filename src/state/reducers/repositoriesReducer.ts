import { ActionType } from '../actions-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState:RepositoriesState ={
  data: [],
  loading:false,
  error:null
}

const reducer = (state = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        data: [],
        loading: true,
        error: null
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        data: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
