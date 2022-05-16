import * as Detail from './Detail';
import * as Items from './Items';

export interface ApplicationState {
	items: Items.ItemsState | undefined;
	detail: Detail.DetailState | undefined;
};

export const reducers = {
	items: Items.reducer,
	detail: Detail.reducer,
};

export interface AppThunkAction<TAction> {
	(dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}