"use client"
import { Provider } from 'react-redux'
import store from '../_RTK/store'

function Providerwrap({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providerwrap;