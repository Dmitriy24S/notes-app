import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { toggleCreateNoteForm } from '../../store/notesSlice/notesSlice'

const AddNoteButton = () => {
  const dispatch = useDispatch()

  return (
    <Button transition={'all 0.3s ease'} onClick={() => dispatch(toggleCreateNoteForm())}>
      Add Note
    </Button>
  )
}

export default AddNoteButton
