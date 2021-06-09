import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from './reducer'

const Heading: React.FC<{
    level: number,
    size?: string,
    weight?: string,
    className?: string,
    children?: JSX.Element[] | JSX.Element | string
  }> = ({level, children, className, size, weight}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: level
    })
  }, [level])

  if(level > 0 && level < 7) {
    return (
      React.createElement(`h${level}`, {className: `${className} ${size || state.fontSize} ${weight || state.fontWeight}`}, children)    
    )
  } else {
    throw new Error('Please choose a level between 1 and 6')
  }
}

export default Heading