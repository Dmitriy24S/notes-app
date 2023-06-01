import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { shallowEqual, useSelector } from 'react-redux'
import FilterInput from '../../components/FilterNotes/FilterInput'
import Header from '../../components/HomePageHeader/HomePageHeader'
import Note from '../../components/Note/Note'
import { RootState } from '../../store/store'

const HomePage = () => {
  console.count('HomePage render')

  const filteredNotes = useSelector(
    (state: RootState) => state.notes.filteredNotes,
    shallowEqual
  )

  return (
    <>
      <Helmet>
        <title>Notes App</title>
      </Helmet>
      <Box p={4} minHeight={'100vh'}>
        <Header />
        <FilterInput />
        <Grid
          // templateColumns='repeat(auto-fit, minmax(200px, 1fr))' // expands width
          templateColumns='repeat(auto-fill, minmax(200px, 1fr))' // contains width
          // templateColumns='repeat(3, minmax(200px, 1fr))'
          alignContent={'center'}
          gap={6}
        >
          {/* {notes.map((note) => ( */}
          {filteredNotes?.map((note) => (
            <GridItem key={note.id} w='100%'>
              {/* <Note note={note} /> */}
              {/* <Note title={note.title} body={note.content} id={note.id} /> */}
              <Note {...note} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default HomePage
