import { IconButton, Menu, MenuButton } from '@chakra-ui/react'
import { MdOutlineMoreVert } from 'react-icons/md'
import NoteDropdown from './NoteDropdown'

interface Props {
  toggleEditMode: () => void
  id: string
}

const DropdownToggleContainer = ({ id, toggleEditMode }: Props) => {
  console.count('DropdownToggleContainer render')

  return (
    <Menu isLazy={true} placement='bottom-end' autoSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<MdOutlineMoreVert />}
        fontSize={20}
        padding={0}
        minWidth={'20px'}
        width={'20px'}
        borderRadius={'5px'}
        transition={'all 0.3s ease'}
        outlineColor={'transparent'}
        bgColor={'transparent'}
        _hover={{ bgColor: 'whiteAlpha.300' }}
        _focusVisible={{ outlineColor: 'white', bgColor: 'whiteAlpha.300' }}
        _active={{ bgColor: 'whiteAlpha.300' }}
        size={'sm'}
      />
      <NoteDropdown handleClick={toggleEditMode} id={id} />
    </Menu>
  )
}

export default DropdownToggleContainer
