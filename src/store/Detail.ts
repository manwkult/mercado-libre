import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

import {
  ClearAction,
  GetByIdAction,
  GetByIdFailedAction
} from './actions/Items';

import { Detail } from '../models/Detail';

import itemsService from '../services/items';

// -----------------
// STATE
// -----------------

export interface DetailState {
  detail: Detail;
  message?: string;
}


type KnownAction =
  ClearAction |
  GetByIdAction |
  GetByIdFailedAction;

// ----------------
// ACTION CREATORS
// ----------------

export const actionCreators = {
  getById: (id: string): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    dispatch({ type: 'CLEAR' });

    const detail = await itemsService.get(id);

    if (detail) {
      dispatch({ type: 'GET_BY_ID', payload: { detail } });
    } else {
      dispatch({ type: 'GET_BY_ID_FAILED', payload: { message: 'Se ha presentado un error' } });
    }
  }
};

// ----------------
// REDUCER
// ----------------

const unloadedState: DetailState = { detail: {} as Detail };

export const reducer: Reducer<DetailState> = (state: DetailState | undefined, incomingAction: Action): DetailState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'CLEAR': {
      return {
        detail: {} as Detail,
        message: undefined
      };
    }
    case 'GET_BY_ID': {
      const { detail } = action.payload;
      if (detail) {
        return {
          detail,
          message: undefined
        };
      }
      break;
    }
    case 'GET_BY_ID_FAILED': {
      const { message } = action.payload;
      if (message) {
        return {
          detail: {} as Detail,
          message,
        };
      }
      break;
    }
  }

  return state;
};
