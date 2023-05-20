import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { toggleCreateNoteForm } from '../../store/notesSlice/notesSlice'

const AddNoteButton = () => {
  const dispatch = useDispatch()

  return (
    <Button
      bgColor={'gray.100'}
      color={'gray.900'}
      transition={'all 0.3s ease'}
      _hover={{
        bgColor: 'gray.50',
      }}
      _focusVisible={{
        bgColor: 'gray.50',
        outline: '2px solid white',
        outlineOffset: '2px',
      }}
      onClick={() => dispatch(toggleCreateNoteForm())}
    >
      Add Note
    </Button>
  )
}

export default AddNoteButton
