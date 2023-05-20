import { Button } from '@chakra-ui/react'

interface Props {
  toggleEditMode: () => void
}

const ExitEditModeButton = ({ toggleEditMode }: Props) => (
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
    }}
    onClick={toggleEditMode}
  >
    Exit Edit
  </Button>
)

export default ExitEditModeButton
