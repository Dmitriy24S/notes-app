import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { NoteType } from '../../store/notesSlice/notesSlice'
import NoteBody from './NoteBody/NoteBody'
import NoteFooter from './NoteFooter/NoteFooter'
import NoteHeader from './NoteHeader/NoteHeader'

interface Props extends NoteType {
  fullNotePage?: boolean
}

const Note = ({ title, content, id, fullNotePage = false, tags = [] }: Props) => {
  console.count('Note render')
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <Box
      bg='#ef5236'
      p={6}
      color='white'
      borderRadius={5}
      boxShadow={'xl'}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
    >
      <NoteHeader
        id={id}
        title={title}
        toggleEditMode={toggleEditMode}
        isEditMode={isEditMode}
        fullNotePage={fullNotePage}
      />
      <NoteBody
        id={id}
        content={content}
        isEditMode={isEditMode}
        fullNotePage={fullNotePage}
      />
      <NoteFooter tags={tags} />
    </Box>
  )
}

export default Note
