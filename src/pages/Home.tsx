import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { NoteList } from '../components/NoteList';
import { Note, noteService } from '../services/noteService';

export function Home() {
  const [notes, setNotes] = useState<Note[]>(noteService.query);

  const onAddNote = () => {
    setNotes([...notes, noteService.blankNote]);
  };

  const onUpdateNote = (note: Note) => {
    setNotes(() =>
      notes.map(note_ => {
        if (note_.id === note.id) {
          return note_;
        }
        return note;
      }),
    );
  };

  const onRemoveNote = (noteId: string) => {
    setNotes(() => notes.filter(note => note.id !== noteId));
  };

  useEffect(() => {
    noteService.saveNotes(notes);
  }, [notes]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.textInput} placeholder='Add a note...' />
        {/* <Image source={} /> */}
      </View>
      <NoteList
        notes={notes}
        onUpdateNote={onUpdateNote}
        onRemoveNote={onRemoveNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  textInput: {
    margin: '1rem',
    padding: '0.5rem',
    borderRadius: 5,
  },
});
