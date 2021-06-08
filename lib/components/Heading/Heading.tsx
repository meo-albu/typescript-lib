import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from './reducer'

interface Props {
  level: number,
  size: string,
  weight: string,
  className: string,
  children: JSX.Element[] | JSX.Element | string
}

const Heading = (props: Props, {...rest}) => {
  const {
    level,
    size,
    weight,
    className,
    children
  } = props

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: props.level
    })
  }, [level])

  if(level > 0 && level < 7) {
    return (
      React.createElement(`h${level}`, {...rest, className: `${className} ${size || state.fontSize} ${weight || state.fontWeight}`}, children)    
    )
  } else {
    throw new Error('Please choose a level between 1 and 6')
  }
}

export default Heading