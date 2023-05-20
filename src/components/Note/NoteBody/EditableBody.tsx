import { Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateNote } from '../../../store/notesSlice/notesSlice'

interface Props {
  id: string
  content: string
  fullNotePage?: boolean
}

const EditableBody = ({ id, content, fullNotePage = false }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      <Textarea
        defaultValue={content}
        resize={'none'}
        // minHeight={fullNotePage ? '500px' : 'unset'}
        rows={fullNotePage ? 20 : 5}
        padding={0}
        border={'none'}
        mt={'1px'}
        _focusVisible={{
          borderColor: 'transparent',
        }}
        overscrollBehaviorY={'contain'}
        onBlur={(e) => {
          e.preventDefault()
          // console.log('e.currentTarget', e.currentTarget.value)
          // todo debounce save?
          dispatch(
            updateNote({
              id: id,
              content: e.currentTarget.value,
            })
          )
        }}
      />
    </>
  )
}

export default EditableBody
