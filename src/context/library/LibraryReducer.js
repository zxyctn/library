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
        displayX: false,
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
      return {
        ...state,
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: books.filter((book) => book.id != action.payload),
      };
    default:
      return state;
  }
};

export default libraryReducer;
