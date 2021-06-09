export const initialState = {
  fontSize: '',
  fontWeight: '',
}

interface Action {
  type: number
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 1:
      return {
        fontSize: 'text-6xl',
        fontWeight: 'font-bold',
      }
    case 2:
      return {
        fontSize: 'text-5xl',
        fontWeight: 'font-bold',
      }
    case 3:
      return {
        fontSize: 'text-4xl',
        fontWeight: 'font-bold',
      }
    case 4:
      return {
        fontSize: 'text-3xl',
        fontWeight: 'font-bold',
      }
    case 5:
      return {
        fontSize: 'text-2xl',
        fontWeight: 'font-bold',
      }
    case 6:
      return {
        fontSize: 'text-xl',
        fontWeight: 'font-bold',
      }
    default: 
      return state
  }
}