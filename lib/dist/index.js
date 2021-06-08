function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

var Heading = function Heading(props, _ref) {
  var rest = _extends({}, _ref);

  var level = props.level,
      size = props.size,
      weight = props.weight,
      className = props.className,
      children = props.children;

  var _useReducer = React.useReducer(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  React.useEffect(function () {
    dispatch({
      type: props.level
    });
  }, [level]);

  if (level > 0 && level < 7) {
    return React__default.createElement("h" + level, _extends({}, rest, {
      className: className + " " + (size || state.fontSize) + " " + (weight || state.fontWeight)
    }), children);
  } else {
    throw new Error('Please choose a level between 1 and 6');
  }
};

exports.Heading = Heading;
//# sourceMappingURL=index.js.map
