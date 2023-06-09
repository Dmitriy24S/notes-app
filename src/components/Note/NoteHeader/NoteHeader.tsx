import { Box } from '@chakra-ui/react'
import Dropdown from '../Dropdown/Dropdown'
import Heading from './Heading'

interface Props {
  title: string
  id: string
  isEditMode: boolean
  toggleEditMode: () => void
  fullNotePage: boolean
}

const NoteHeader = ({ title, id, isEditMode, toggleEditMode, fullNotePage }: Props) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} mb={6} gap={4}>
      <Heading
        id={id}
        title={title}
        isEditMode={isEditMode}
        fullNotePage={fullNotePage}
      />
      {!fullNotePage && (
        <Dropdown id={id} isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
      )}
    </Box>
  )
}

export default NoteHeader
