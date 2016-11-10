export const MAKE_BARK = 'MAKE_BARK';
export const NO_BARK = 'NO_BARK';

export const makeBark = () =>({
  type: MAKE_BARK,
  payload: true,
});

export const noBark = () =>({
  type: NO_BARK,
  payload: false,
});