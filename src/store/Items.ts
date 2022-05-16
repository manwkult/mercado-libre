import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

import {
  ClearAction,
  SearchAction,
  SearchFailedAction
} from './actions/Items';

import { Items } from '../models/Items';

import itemsService from '../services/items';

// -----------------
// STATE
// -----------------

export interface ItemsState {
  items: Items;
  message?: string;
}


type KnownAction =
  ClearAction |
  SearchAction |
  SearchFailedAction;

// ----------------
// ACTION CREATORS
// ----------------

export const actionCreators = {
  search: (query: string): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    dispatch({ type: 'CLEAR' });

    const items = await itemsService.search(query);

    if (items) {
      dispatch({ type: 'SEARCH', payload: { items } });
    } else {
      dispatch({ type: 'SEARCH_FAILED', payload: { message: 'Se ha presentado un error' } });
    }
  }
};

// ----------------
// REDUCER
// ----------------

const unloadedState: ItemsState = { items: {} as Items };

export const reducer: Reducer<ItemsState> = (state: ItemsState | undefined, incomingAction: Action): ItemsState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'CLEAR': {
      return {
        items: {} as Items,
        message: undefined
      };
    }
    case 'SEARCH': {
      const { items } = action.payload;
      if (items) {
        return {
          items,
          message: undefined
        };
      }
      break;
    }
    case 'SEARCH_FAILED': {
      const { message } = action.payload;
      if (message) {
        return {
          items: {} as Items,
          message,
        };
      }
      break;
    }
  }

  return state;
};
