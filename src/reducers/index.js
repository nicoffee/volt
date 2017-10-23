import { combineReducers } from 'redux'
import * as types from '../types'

const products = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.items,
        isFetching: false
      }
    case types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, action.payload]
      }
    case types.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.id) {
            item = {
              ...item,
              name: action.payload.name,
              price: action.payload.price
            }
            return item
          }
          return item
        }),
        isFetching: false
      }
    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

const customers = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        items: action.items,
        isFetching: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ products, customers })

export default rootReducer
