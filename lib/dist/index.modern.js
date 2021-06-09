import React, { useReducer, useEffect } from 'react';

var initialState = {
  fontSize: '',
  fontWeight: ''
};
var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

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

var Heading = function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      weight = _ref.weight;

  var _useReducer = useReducer(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  useEffect(function () {
    dispatch({
      type: level
    });
  }, [level]);

  if (level > 0 && level < 7) {
    return React.createElement("h" + level, {
      className: className + " " + (size || state.fontSize) + " " + (weight || state.fontWeight)
    }, children);
  } else {
    throw new Error('Please choose a level between 1 and 6');
  }
};

export { Heading };
//# sourceMappingURL=index.modern.js.map
