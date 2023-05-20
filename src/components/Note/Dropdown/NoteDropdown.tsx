import { MenuItem, MenuList } from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeNote } from '../../../store/notesSlice/notesSlice'

interface Props {
  handleClick: () => void
  id: string
}

const NoteDropdown = ({ handleClick, id }: Props) => {
  console.count('NoteDropdown render')

  const dispatch = useDispatch()

  return (
    <MenuList borderRadius={'5px'} overflow={'hidden'} p={0} border={'none'}>
      <MenuItem
        icon={<AiFillEdit />}
        padding={'0.8rem'}
        backgroundColor={'rgba(0, 0, 0, 0.663)'}
        transition={'all 0.1s ease'}
        _hover={{ bg: 'rgba(35, 35, 35, 0.663)' }}
        _focusVisible={{ bg: 'rgba(35, 35, 35, 0.663)' }}
        // onClick={() => setIsEditMode(!isEditMode)}
        onClick={handleClick}
      >
        Edit
      </MenuItem>
      <MenuItem
        icon={<MdDeleteOutline />}
        padding={'0.8rem'}
        backgroundColor={'rgba(0, 0, 0, 0.663)'}
        transition={'all 0.1s ease'}
        _hover={{ bg: 'rgb(183, 3, 3)' }}
        _focusVisible={{ bg: 'rgb(183, 3, 3)' }}
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this note?')) {
            dispatch(removeNote(id))
            // if (fullNotePage) {
            // navigate('/') // on full note page if delete go back to home
            // }
          }
        }}
      >
        Delete
      </MenuItem>
    </MenuList>
  )
}

export default NoteDropdown
