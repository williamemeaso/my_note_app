export const addNote = (note) => ({
  type: 'ADD_NOTE',
  payload: note,
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: id,
});
