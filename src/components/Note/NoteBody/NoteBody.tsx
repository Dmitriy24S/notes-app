import { Text } from '@chakra-ui/react'
import EditableBody from './EditableBody'

interface Props {
  id: string
  content: string
  isEditMode: boolean
  fullNotePage: boolean
}

const NoteBody = ({ id, content, isEditMode, fullNotePage }: Props) => {
  // on full page always show editable body
  if (fullNotePage) {
    return <EditableBody id={id} content={content} fullNotePage={fullNotePage} />
  }

  // on note preview toggle between text and editable body
  return isEditMode ? (
    <EditableBody id={id} content={content} />
  ) : (
    <Text minHeight={'200px'}>{content}</Text>
  )
}

export default NoteBody
