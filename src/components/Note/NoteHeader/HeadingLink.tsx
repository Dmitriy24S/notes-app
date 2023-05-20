import { Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  id: string
  title: string
}

const HeadingLink = ({ id, title }: Props) => (
  <Link
    as={RouterLink}
    to={`/note/${id}`}
    borderRadius={'5px'}
    _focusVisible={{ outlineColor: 'white', bgColor: 'whiteAlpha.300' }}
    transition={'all 0.3s ease'}
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Heading my={0} fontSize={'3xl'}>
      {title}
    </Heading>
  </Link>
)

export default HeadingLink
