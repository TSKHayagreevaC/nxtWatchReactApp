import React from 'react'

const CartContext = React.createContext({
  isLightThemeActive: true,
  alterTheme: () => {},
  savedVideosList: [],
  isVideoSaved: false,
  saveOrDeleteVideo: () => {},
})

export default CartContext
