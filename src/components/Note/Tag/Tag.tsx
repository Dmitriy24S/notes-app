import { Tag as TagChakra } from '@chakra-ui/react'

interface Props {
  tagText: string
}

const Tag = ({ tagText }: Props) => {
  return (
    <TagChakra
      transition={'all 0.3s ease'}
      _light={{
        backgroundColor: 'rgba(226, 232, 240, 0.16)',
        color: 'gray.200',
      }}
    >
      {tagText}
    </TagChakra>
  )
}

export default Tag
