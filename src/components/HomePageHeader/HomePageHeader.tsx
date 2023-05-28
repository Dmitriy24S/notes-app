import { Box, Heading } from '@chakra-ui/react'
import AddNoteButton from '../AddNoteButton/AddNoteButton'
import FilterTogglebutton from '../FilterNotes/FilterToggleButton'
import NewNoteModal from '../NewNoteModal/NewNoteModal'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

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
        <FilterTogglebutton />
        <ThemeToggle />
      </Box>
      <AddNoteButton />
      <NewNoteModal />
    </Box>
  )
}

export default Header
