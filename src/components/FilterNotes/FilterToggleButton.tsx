import { IconButton, Tooltip } from '@chakra-ui/react'
import { useEffect } from 'react'
import { AiOutlineTag } from 'react-icons/ai'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../store/notesSlice/notesSlice'
import { RootState } from '../../store/store'

const FilterTogglebutton = () => {
  const dispatch = useDispatch()
  const selectedTags = useSelector(
    (state: RootState) => state.notes.selectedTags,
    shallowEqual
  )
  const isFilterOpen = useSelector((state: RootState) => state.notes.isFilterOpen)

  useEffect(() => {
    if (!isFilterOpen && selectedTags.length > 0) {
      dispatch(toggleFilter())
    }
  }, [dispatch, selectedTags, isFilterOpen])

  return (
    <Tooltip label='Filter by tags' fontSize='sm'>
      <IconButton
        aria-label='Filter by tags'
        size='sm'
        variant='ghost'
        onClick={() => {
          if (selectedTags.length !== 0) {
            return // not allow closing filter select input if have active filters
          }
          // setShowFilter(!showFilter)
          dispatch(toggleFilter())
        }}
      >
        <AiOutlineTag fontSize={'20px'} />
      </IconButton>
    </Tooltip>
  )
}

export default FilterTogglebutton
