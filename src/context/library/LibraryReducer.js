const libraryReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_X':
      return {
        ...state,
        displayX: true,
      };
    case 'DISPLAY_+':
      return {
        ...state,
        displayMinus: false,
        displayX: false,
      };
    case 'DISPLAY_MINUS':
      return {
        ...state,
        id: action.payload,
        displayMinus: true,
      };
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: +new Date() }],
      };
    case 'EDIT_BOOK':
      const idx = state.books.findIndex(
        (item) => item.id === action.payload.id
      );
      state.books[idx] = action.payload;
      return state;
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== state.id),
        id: null,
      };
    case 'SET_FOREGROUND':
      document.getElementById('app').style.color = action.payload;
      document.getElementById('app').style.transition = 'color 0.5s ease-out';

      return state;
    default:
      return state;
  }
};

export default libraryReducer;
