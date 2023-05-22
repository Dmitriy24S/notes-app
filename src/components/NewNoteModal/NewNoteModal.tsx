import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, toggleCreateNoteForm } from '../../store/notesSlice/notesSlice'
import { RootState } from '../../store/store'

const NewNoteModal = () => {
  const isCreateNoteFormOpen = useSelector(
    (state: RootState) => state.notes.isCreateNoteFormOpen
  )
  const dispatch = useDispatch()

  return (
    <Modal
      isOpen={isCreateNoteFormOpen}
      onClose={() => dispatch(toggleCreateNoteForm())}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Note</ModalHeader>
        <ModalCloseButton />
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('form e', e)
            const formData = new FormData(e.currentTarget)
            const formObject = Object.fromEntries(formData.entries()) // [k: string]: FormDataEntryValue;
            console.log({ formData })
            console.log({ formObject })
            console.log(formObject) // {title: '1111'}
            const note = {
              title: (formObject.title as string) || '',
              content: (formObject.description as string) || '',
            }

            dispatch(addNote(note))
            dispatch(toggleCreateNoteForm())
          }}
        >
          <ModalBody>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
              <Input
                placeholder='New Note'
                name='title'
                border={'none'}
                autoFocus
                _focusVisible={{
                  border: 'transparent',
                }}
                _dark={{
                  backgroundColor: '#272727',
                }}
                _light={{
                  backgroundColor: '#ededed',
                }}
              />
              <Textarea
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus ea saepe architecto ipsa voluptas excepturi rerum optio repellat quo.'
                title='description'
                minHeight={'200px'}
                border={'none'}
                _focusVisible={{
                  border: 'transparent',
                }}
                _dark={{
                  backgroundColor: '#272727',
                }}
                _light={{
                  backgroundColor: '#ededed',
                }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={() => dispatch(toggleCreateNoteForm())}>
              Cancel
            </Button>
            <Button type='submit' transition={'all 0.3s ease'}>
              Add Note
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default NewNoteModal
