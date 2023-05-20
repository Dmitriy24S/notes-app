import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type Note = { id: string; title: string; content: string }

export interface NotesState {
  notes: Note[]
  isCreateNoteFormOpen: boolean
  selectedNote: Note | null
}

const initialState: NotesState = {
  notes: [{ id: 'note-1', title: 'Note 1', content: 'Content 1' }],
  isCreateNoteFormOpen: false,
  selectedNote: null,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<Omit<Note, 'id'>>
      // action: PayloadAction<Partial<Note>>
    ) => {
      // console.log('action', action, 'action.payload', action.payload)
      // {
      // "type": "notes/addNote",
      // "payload": {
      // "title": "asdasda"
      // }
      // }
      const post = {
        id: crypto.randomUUID(),
        title: action.payload.title || 'No Title',
        content: action.payload.content || 'No Description',
      }
      state.notes.push(post)
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
      state.selectedNote = null // without this: after remove note -> open another one -> show deleted note info?
    },
    updateNote: (state, action: PayloadAction<Partial<Note>>) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id)

      if (noteIndex !== -1) {
        state.notes[noteIndex] = {
          ...state.notes[noteIndex],
          ...action.payload,
        }
      }
      console.log('redux noteIndex', noteIndex)
      console.log('redux new note', { ...state.notes[noteIndex], ...action.payload })

      if (state.selectedNote && state.selectedNote.id === action.payload.id) {
        state.selectedNote = {
          ...state.selectedNote,
          ...action.payload,
        }
      }
    },
    toggleCreateNoteForm: (state) => {
      state.isCreateNoteFormOpen = !state.isCreateNoteFormOpen
    },
    selectNote: (state, action: PayloadAction<string>) => {
      state.selectedNote = state.notes.find((note) => note.id === action.payload) || null
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, removeNote, toggleCreateNoteForm, selectNote, updateNote } =
  notesSlice.actions

export default notesSlice.reducer
