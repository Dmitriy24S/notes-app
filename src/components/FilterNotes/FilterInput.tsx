import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { filterNotesByTag, selectTag } from '../../store/notesSlice/notesSlice'
import { RootState } from '../../store/store'

const FilterInput = () => {
  const notes = useSelector((state: RootState) => state.notes.notes, shallowEqual)
  const selectedTags = useSelector(
    (state: RootState) => state.notes.selectedTags,
    shallowEqual
  )
  const [allTags, setAllTags] = useState<
    {
      value: string
      label: string
    }[]
  >([])
  const isFilterOpen = useSelector((state: RootState) => state.notes.isFilterOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    const updatedAllTags: { value: string; label: string }[] = []
    const uniqueTags: string[] = []

    const getTags = () => {
      notes.forEach((note) => {
        if (note.tags && note.tags.length > 0) {
          note.tags.map((tag) => {
            if (!uniqueTags.includes(tag)) {
              uniqueTags.push(tag)
              updatedAllTags.push({ value: tag, label: tag })
            }
          })
        }
      })
      setAllTags(updatedAllTags)
    }

    getTags()
    console.log('allTags', allTags)
  }, [dispatch, notes])

  // Update Filtered Notes in accordance with currently selected tags state when original notes state changes (i.e. Home Page notes not updated with new added note)
  useEffect(() => {
    dispatch(filterNotesByTag(selectedTags))
  }, [dispatch, selectedTags, notes])

  if (!isFilterOpen) {
    return null
  }

  return (
    <Box mb={'1.4rem'} color={'black'} outline={'none'}>
      <Select
        onChange={(e) => {
          // console.log('Select change event', e)
          // [{…}]
          // 0:
          // label: "Note 1"
          // value: "Note 1"
          const values = e.map((item) => item.label.toLowerCase())
          dispatch(selectTag(values))
        }}
        isMulti
        name='colors'
        options={allTags}
        className='basic-multi-select'
        classNamePrefix='select'
        styles={{
          control: (
            baseStyles
            // state
          ) => ({
            ...baseStyles,
            // borderColor: state.isFocused ? 'grey' : 'red',
            // borderColor: 'transparent',
            borderColor: 'hsl(0, 0%, 80%);',
            outlineColor: 'white',
            boxShadow: 'none',
            ':hover': {
              // borderColor: 'transparent',
              borderColor: 'hsl(0, 0%, 80%);',
              boxShadow: 'none',
            },
          }),
          multiValueRemove: (
            styles
            // { data }
          ) => ({
            ...styles,
            // color: data.color,
            ':hover': {
              // color: 'white',
              cursor: 'pointer',
            },
          }),
        }}
      />
    </Box>
  )
}

export default FilterInput
