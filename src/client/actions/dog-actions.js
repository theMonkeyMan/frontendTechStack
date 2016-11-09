export const MAKE_BARK = 'MAKE_BARK';

export const makeBark = isBark=>({
  type: MAKE_BARK,
  payload: isBark,
})