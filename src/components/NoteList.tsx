import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Note } from '../services/noteService';
import { utilService } from '../services/utilService';
import { NoteDetails } from './NoteDetails';

export function NoteList({
  notes,
  onUpdateNote,
  onRemoveNote,
}: {
  notes: Note[];
  onUpdateNote: (note: Note) => void;
  onRemoveNote: (noteId: string) => void;
}) {
  return (
    <View style={styles.container}>
      {notes.map(note => (
        <TouchableHighlight activeOpacity={0.6} underlayColor='#ddd'>
          <NoteDetails
            key={utilService.makeId()}
            note={note}
            onUpdateNote={onUpdateNote}
            onRemoveNote={onRemoveNote}
          />
        </TouchableHighlight>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
