import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TagType, selectTag } from '../../../store/notesSlice/notesSlice'
import Tag from '../Tag/Tag'

interface Props {
  tags: TagType[]
}

const NoteFooter = ({ tags }: Props) => {
  const dispatch = useDispatch()
  const [uniqueTags, setUniqueTags] = useState<string[]>([])
  const [allTags, setAllTags] = useState<TagType[]>([])

  const handleClick = (clickedTag: TagType) => {
    if (!uniqueTags.includes(clickedTag.label)) {
      setUniqueTags((prev) => [...prev, clickedTag.label])
      setAllTags((prev) => [...prev, clickedTag])
    } else {
      setAllTags((prev) => prev.filter((tag) => tag.label !== clickedTag.label))
      setUniqueTags((prev) => prev.filter((tag) => tag !== clickedTag.label))
    }
  }

  useEffect(() => {
    dispatch(selectTag(allTags))
  }, [dispatch, allTags])

  return (
    <Box display={'flex'} gap={2} mt={2} flexWrap={'wrap'}>
      {tags.map((tag) => (
        <Tag
          tagText={tag.label}
          key={tag.label}
          handleClick={handleClick}
          uniqueTags={uniqueTags}
        />
      ))}
    </Box>
  )
}

export default NoteFooter
