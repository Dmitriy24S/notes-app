import { Box, Button, Heading, Link } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { removeNote } from '../../store/notesSlice/notesSlice'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

interface Props {
  id: string
}

const Header = ({ id }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={4}
      mb={4}
    >
      <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
        <Link
          as={RouterLink}
          to={`/`}
          width={'fit-content'}
          _hover={{ textDecoration: 'none' }}
          borderRadius={'5px'}
          _focusVisible={{
            outline: '2px solid white',
          }}
        >
          <Heading size='xl'>Notes</Heading>
        </Link>
        <ThemeToggle />
      </Box>

      <Button
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this note?')) {
            dispatch(removeNote(id))
            navigate('/') // on full note page if delete go back to home
          }
        }}
      >
        Delete Note
      </Button>
    </Box>
  )
}

export default Header
