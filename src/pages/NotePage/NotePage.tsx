import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Note from '../../components/Note/Note'
import Header from '../../components/NotePageHeader'
import { selectNote } from '../../store/notesSlice/notesSlice'
import { RootState } from '../../store/store'

const NotePage = () => {
  console.count('NotePage render')
  const { noteId } = useParams()
  // console.log(noteId) // note-1

  // const { id, title, content } = useSelector(
  const note = useSelector((state: RootState) => state.notes.selectedNote, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectNote(noteId as string))
  }, [dispatch, noteId, note])

  if (!note) {
    // return <Heading>Loading</Heading>
    return null
  }

  return (
    <>
      <Helmet>
        <title>{`${note.title} - Notes App`}</title>
      </Helmet>
      <Box p={16}>
        <Header id={note.id} />
        <Note id={note.id} title={note.title} content={note.content} fullNotePage />
      </Box>
    </>
  )
}

export default NotePage
