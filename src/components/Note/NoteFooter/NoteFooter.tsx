import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { TagType, selectTag } from '../../../store/notesSlice/notesSlice'
import { RootState } from '../../../store/store'
import Tag from '../Tag/Tag'

interface Props {
  tags: TagType[]
}

const NoteFooter = ({ tags }: Props) => {
  const dispatch = useDispatch()
  const selectedTags = useSelector(
    (state: RootState) => state.notes.selectedTags,
    shallowEqual
  )
  const [footerTags, setFooterTags] = useState<TagType[]>(selectedTags)

  const handleClick = (clickedTag: TagType) => {
    const tagExists = selectedTags.find((tag) => tag.value === clickedTag.value)

    if (tagExists) {
      // if tag is already selected -> unselect/remove it
      setFooterTags((prev) => prev.filter((tag) => tag.label !== clickedTag.label))
    } else {
      // add tag
      setFooterTags((prev) => [...prev, clickedTag])
    }
  }

  // without this: if in input unselect tag -> note does not update tag unselected state & and starts stacking tags on next selections into input
  useEffect(() => {
    setFooterTags(selectedTags)
  }, [selectedTags])

  // update global state of tags (i.e. click on note tag to select/unselect tag)
  useEffect(() => {
    dispatch(selectTag(footerTags))
  }, [dispatch, footerTags])

  return (
    <Box display={'flex'} gap={2} mt={2} flexWrap={'wrap'}>
      {tags.map((tag) => (
        <Tag tagText={tag.label} key={tag.label} handleClick={handleClick} />
      ))}
    </Box>
  )
}

export default NoteFooter
