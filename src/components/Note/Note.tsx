import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import NoteBody from './NoteBody/NoteBody'
import NoteHeader from './NoteHeader/NoteHeader'

interface Props {
  title: string
  content: string
  id: string
  fullNotePage?: boolean
}

const Note = ({ title, content, id, fullNotePage = false }: Props) => {
  console.count('Note render')
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <Box bg='#ef5236' p={6} color='white' borderRadius={5} boxShadow={'xl'}>
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
    </Box>
  )
}

export default Note
