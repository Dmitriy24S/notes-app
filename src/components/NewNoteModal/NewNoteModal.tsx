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
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Creatable from 'react-select/creatable'
import { addNote, toggleCreateNoteForm } from '../../store/notesSlice/notesSlice'
import { RootState } from '../../store/store'

const NewNoteModal = () => {
  const isCreateNoteFormOpen = useSelector(
    (state: RootState) => state.notes.isCreateNoteFormOpen
  )
  const dispatch = useDispatch()

  const [allTags, setAllTags] = useState<
    {
      value: string
      label: string
    }[]
  >([])

  const notes = useSelector((state: RootState) => state.notes.notes, shallowEqual)

  useEffect(() => {
    const updatedAllTags: { value: string; label: string }[] = []
    const getTags = () => {
      notes.forEach((note) => {
        if (note.tags && note.tags.length > 0) {
          const noteTags = note.tags.map((tag) => {
            return { value: tag, label: tag }
          })
          // allTags.push(...noteTags)
          // setAllTags((prev) => [...prev, ...noteTags])
          // setAllTags([...noteTags])
          updatedAllTags.push(...noteTags)
        }
      })
      setAllTags(updatedAllTags)
    }

    getTags()
    console.log('allTags', allTags)
    // dispatch(filterNotesByTag(selectedTags))
    // }, [dispatch, selectedTags, notes])
  }, [notes])

  const [selectedTags, setSelectedTags] = useState<string[]>([])

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
              // tags: [],
              tags: selectedTags || [],
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
                  backgroundColor: '#202020c9',
                  _placeholder: {
                    color: '#bababa',
                  },
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
                  // backgroundColor: '#272727',
                  backgroundColor: 'rgb(32 32 32 / 79%)',
                  _placeholder: {
                    color: '#bababa',
                  },
                }}
                _light={{
                  backgroundColor: '#ededed',
                }}
              />
            </Box>
            {/* Tags */}
            <Box mt={'4'} color={'black'} outline={'none'}>
              <Creatable
                onChange={(e) => {
                  console.log('Select change event', e)
                  const values = e.map((item) => item.label.toLowerCase())
                  console.log('values', values)
                  setSelectedTags(values)
                }}
                isMulti
                name='tags'
                options={allTags}
                className='basic-multi-select'
                classNamePrefix='select'
                styles={{
                  control: (
                    baseStyles
                    // state
                  ) => ({
                    ...baseStyles,
                    // color: 'black',
                    // borderColor: state.isFocused ? 'grey' : 'red',
                    borderColor: 'hsl(0, 0%, 80%);',
                    outlineColor: 'white',
                    boxShadow: 'none',
                    ':hover': {
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
                  indicatorsContainer: (styles) => ({
                    ...styles,
                    cursor: 'pointer',
                    // display: 'flex',
                  }),
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
