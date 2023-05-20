import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { shallowEqual, useSelector } from 'react-redux'
import Header from '../../components/HomePageHeader/HomePageHeader'
import Note from '../../components/Note/Note'
import { RootState } from '../../store/store'

const HomePage = () => {
  console.count('HomePage render')

  const notes = useSelector((state: RootState) => state.notes.notes, shallowEqual)

  console.log('homePage filteredNotes', notes)

  return (
    <>
      <Helmet>
        <title>Notes App</title>
      </Helmet>
      <Box p={16} minHeight={'100vh'}>
        <Header />
        <Grid
          templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
          alignContent={'center'}
          gap={6}
        >
          {notes.map((note) => (
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
