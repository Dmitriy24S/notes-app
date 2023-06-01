import { Tag as TagChakra } from '@chakra-ui/react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { TagType, filterNotesByTag } from '../../../store/notesSlice/notesSlice'
import { RootState } from '../../../store/store'

interface Props {
  tagText: string
  handleClick: (tag: TagType) => void
  uniqueTags: string[]
}

const Tag = ({ tagText, handleClick, uniqueTags }: Props) => {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.notes.notes, shallowEqual)
  const selectedTags = useSelector(
    (state: RootState) => state.notes.selectedTags,
    shallowEqual
  )

  useEffect(() => {
    dispatch(filterNotesByTag(selectedTags))
  }, [dispatch, selectedTags, notes])

  return (
    <TagChakra
      transition={'all 0.3s ease'}
      _light={{
        backgroundColor: 'rgba(226, 232, 240, 0.16)',
        color: 'gray.200',
      }}
      backgroundColor={
        uniqueTags.includes(tagText)
          ? 'rgba(226, 232, 240, 0.3)'
          : 'rgba(226, 232, 240, 0.16)'
      }
      outline={
        uniqueTags.includes(tagText)
          ? '2px solid rgba(226, 232, 240, 0.3)'
          : '2px solid transparent'
      }
      outlineOffset={2}
      _hover={{
        cursor: 'pointer',
        backgroundColor: 'rgba(226, 232, 240, 0.35)',
      }}
      onClick={() => {
        const clickedTag = { value: tagText, label: tagText }
        // const values = [...selectedTags, { value: tagText, label: tagText }]
        handleClick(clickedTag)
      }}
    >
      {tagText}
    </TagChakra>
  )
}

export default Tag
