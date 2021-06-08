import React, { useReducer, useEffect } from 'react';

const initialState = {
  fontSize: '',
  fontWeight: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return {
        fontSize: 'text-6xl',
        fontWeight: 'font-bold'
      };

    case 2:
      return {
        fontSize: 'text-5xl',
        fontWeight: 'font-bold'
      };

    case 3:
      return {
        fontSize: 'text-4xl',
        fontWeight: 'font-bold'
      };

    case 4:
      return {
        fontSize: 'text-3xl',
        fontWeight: 'font-bold'
      };

    case 5:
      return {
        fontSize: 'text-2xl',
        fontWeight: 'font-bold'
      };

    case 6:
      return {
        fontSize: 'text-xl',
        fontWeight: 'font-bold'
      };

    default:
      return state;
  }
};

const Heading = (props, { ...rest
}) => {
  const {
    level,
    size,
    weight,
    className,
    children
  } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: props.level
    });
  }, [level]);

  if (level > 0 && level < 7) {
    return React.createElement(`h${level}`, { ...rest,
      className: `${className} ${size || state.fontSize} ${weight || state.fontWeight}`
    }, children);
  } else {
    throw new Error('Please choose a level between 1 and 6');
  }
};

export { Heading };
//# sourceMappingURL=index.modern.js.map
