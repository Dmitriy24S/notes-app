import EditableHeading from './EditableHeading'
import HeadingLink from './HeadingLink'

interface Props {
  isEditMode: boolean
  fullNotePage: boolean
  title: string
  id: string
}

const Heading = ({ isEditMode, fullNotePage, title, id }: Props) => {
  // on full page always show editable note heading
  if (fullNotePage) {
    return <EditableHeading id={id} title={title} />
  }

  // on note preview toggle between text and editable note heading
  return isEditMode ? (
    <EditableHeading id={id} title={title} />
  ) : (
    <HeadingLink title={title} id={id} />
  )
}

export default Heading
