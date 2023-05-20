import { Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateNote } from '../../../store/notesSlice/notesSlice'

interface Props {
  title: string
  id: string
}

const EditableHeading = ({ title, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <Input
      defaultValue={title}
      fontSize={'3xl'}
      padding={0}
      fontWeight={'bold'}
      border={'none'}
      minHeight={'40px'}
      _focusVisible={{
        border: 'transparent',
      }}
      onBlur={(e) => {
        e.preventDefault()
        // console.log('e.currentTarget', e.currentTarget.value)
        dispatch(
          updateNote({
            id: id,
            title: e.currentTarget.value,
          })
        )
      }}
    />
  )
}

export default EditableHeading
