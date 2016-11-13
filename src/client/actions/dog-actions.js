import {createAction} from 'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';
export const NO_BARK = 'NO_BARK';

export const makeBark = createAction(MAKE_BARK, ()=>true);

export const noBark = createAction(NO_BARK, ()=>false);
