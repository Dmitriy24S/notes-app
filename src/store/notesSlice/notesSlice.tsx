import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type NoteType = { id: string; title: string; content: string; tags: TagType[] }

export type TagType = {
  value: string
  label: string
}

export interface NotesState {
  notes: NoteType[]
  filteredNotes: NoteType[]
  isCreateNoteFormOpen: boolean
  selectedNote: NoteType | null
  isFilterOpen: boolean
  // selectedTags: string[]
  selectedTags: TagType[]
}

const initialState: NotesState = {
  notes: [
    {
      id: 'note-1',
      title: 'Note 1',
      content: 'Content 1',
      tags: [
        { label: 'tag1', value: 'tag1' },
        { label: 'tag2', value: 'tag2' },
      ],
    },
  ],
  filteredNotes: [
    {
      id: 'note-1',
      title: 'Note 1',
      content: 'Content 1',
      tags: [
        { label: 'tag1', value: 'tag1' },
        { label: 'tag2', value: 'tag2' },
      ],
    },
  ],
  isCreateNoteFormOpen: false,
  selectedNote: null,
  isFilterOpen: false,
  selectedTags: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<Omit<NoteType, 'id'>>
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
        tags:
          action.payload.tags.length > 0
            ? action.payload.tags
            : [{ label: 'no tags', value: 'no tags' }],
        // tags: action.payload.tags[0].length > 0 ? action.payload.tags : ['no tags'],
        // tags: action.payload.tags || [],
      }
      state.notes.push(post)
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
      state.selectedNote = null // without this: after remove note -> open another one -> show deleted note info?
    },
    updateNote: (state, action: PayloadAction<Partial<NoteType>>) => {
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
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen
    },
    selectTag: (state, action: PayloadAction<TagType[]>) => {
      // const selectedTag = action.payload.toLowerCase()
      // if (!state.selectedTags.includes(selectedTag)) {
      //   state.selectedTags.push(selectedTag)
      // } else {
      //   state.selectedTags = state.selectedTags.filter((tag) => tag !== selectedTag)
      // }
      state.selectedTags = action.payload
    },
    filterNotesByTag: (state, action: PayloadAction<TagType[]>) => {
      const selectedTags = action.payload.map((tag) => tag.label.toLowerCase())

      if (selectedTags.length === 0) {
        state.filteredNotes = state.notes
        return
      }

      state.filteredNotes = state.notes.filter((note) => {
        const noteTags = note.tags.map((tag) => tag.label.toLowerCase())
        return noteTags.some((noteTag) => selectedTags.includes(noteTag))
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addNote,
  removeNote,
  toggleCreateNoteForm,
  selectNote,
  updateNote,
  toggleFilter,
  filterNotesByTag,
  selectTag,
} = notesSlice.actions

export default notesSlice.reducer
