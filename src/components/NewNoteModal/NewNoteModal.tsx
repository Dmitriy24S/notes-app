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
                color={'white'}
                backgroundColor={'#272727'}
                name='title'
                border={'none'}
                autoFocus
                _focusVisible={{
                  border: 'transparent',
                }}
              />
              <Textarea
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus ea saepe architecto ipsa voluptas excepturi rerum optio repellat quo.'
                title='description'
                backgroundColor={'#272727'}
                minHeight={'200px'}
                border={'none'}
                _focusVisible={{
                  border: 'transparent',
                }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={() => dispatch(toggleCreateNoteForm())}>
              Cancel
            </Button>
            <Button
              type='submit'
              bgColor={'gray.100'}
              color={'gray.900'}
              transition={'all 0.3s ease'}
              _hover={{
                bgColor: 'gray.50',
              }}
              _focusVisible={{
                bgColor: 'gray.50',
                outline: '2px solid white',
              }}
            >
              Add Note
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default NewNoteModal
