import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { MdOutlineDarkMode } from 'react-icons/md'

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Tooltip label='Switch theme' fontSize='sm'>
      <IconButton
        aria-label='Switch theme'
        size='sm'
        onClick={toggleColorMode}
        variant='ghost'
      >
        <MdOutlineDarkMode fontSize={'20px'} />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle
