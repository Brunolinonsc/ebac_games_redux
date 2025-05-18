import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../sevices/api'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaltMidware) => getDefaltMidware().concat(api.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
