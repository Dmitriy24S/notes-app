import { Box, Heading } from '@chakra-ui/react'
import AddNoteButton from '../AddNoteButton/AddNoteButton'
import NewNoteModal from '../NewNoteModal/NewNoteModal'

const Header = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'2rem'}
      mb={4}
    >
      <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
        <Heading as={'h1'}>Notes</Heading>
      </Box>

      <AddNoteButton />
      <NewNoteModal />
    </Box>
  )
}

export default Header
