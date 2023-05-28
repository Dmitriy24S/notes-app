import { Box } from '@chakra-ui/react'
import Tag from '../Tag/Tag'

interface Props {
  // id: string
  tags: string[]
}

const NoteFooter = ({ tags }: Props) => {
  return (
    <Box display={'flex'} gap={2} mt={2} flexWrap={'wrap'}>
      {tags.length > 0 ? (
        tags.map((tag) => <Tag tagText={tag} key={tag} />)
      ) : (
        <Tag tagText={'no tags'} />
      )}
    </Box>
  )
}

export default NoteFooter
