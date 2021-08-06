import * as t from '../type'

export const setInfo = (name) => {
  return ({
    type: t.SET_TYPE,
    payload: name
  })
}