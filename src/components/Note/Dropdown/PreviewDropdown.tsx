import DropdownToggleButton from './DropdownToggleButton'
import ExitEditModeButton from './ExitEditModeButton'

interface Props {
  isEditMode: boolean
  toggleEditMode: () => void
  id: string
}

const PreviewDropdown = ({ isEditMode, toggleEditMode, id }: Props) => {
  return isEditMode ? (
    <ExitEditModeButton toggleEditMode={toggleEditMode} />
  ) : (
    <DropdownToggleButton id={id} toggleEditMode={toggleEditMode} />
  )
}

export default PreviewDropdown
