import DropdownToggleContainer from './DropdownToggleContainer'
import ExitEditModeButton from './ExitEditModeButton'

interface Props {
  isEditMode: boolean
  toggleEditMode: () => void
  id: string
}

const Dropdown = ({ isEditMode, toggleEditMode, id }: Props) => {
  return isEditMode ? (
    <ExitEditModeButton toggleEditMode={toggleEditMode} />
  ) : (
    <DropdownToggleContainer id={id} toggleEditMode={toggleEditMode} />
  )
}

export default Dropdown
