import { Items } from "../../models/Items";
import { Detail } from "../../models/Detail";

export interface SearchAction {
  type: 'SEARCH';
  payload: {
    items: Items;
  }
}

export interface GetByIdAction {
  type: 'GET_BY_ID';
  payload: {
    detail: Detail;
  }
}

export interface SearchFailedAction {
  type: 'SEARCH_FAILED';
  payload: {
    message: string;
  }
}

export interface GetByIdFailedAction {
  type: 'GET_BY_ID_FAILED';
  payload: {
    message: string;
  }
}


export interface ClearAction {
  type: 'CLEAR';
}

