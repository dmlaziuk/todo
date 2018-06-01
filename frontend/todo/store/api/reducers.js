import { fromJS } from 'immutable'
import types from './types'
import helper from '../helper'

const initialState = fromJS({
  host: 'http://localhost'
})

export default helper.createReducer(initialState, {
  [types.SET_HOST]: (state, { host }) => state.set('host', host)
})
