import { StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import { Note } from '../services/noteService';

export function NoteDetails({
  note,
  onUpdateNote,
  onRemoveNote,
}: {
  note: Note;
  onUpdateNote: (note: Note) => void;
  onRemoveNote: (noteId: string) => void;
}) {
  const onToggleItem = (status: boolean) => {};

  return (
    <View style={[styles.container, { backgroundColor: note.color }]}>
      <Text style={styles.title}>{note.title}</Text>
      <View style={styles.items}>
        {/* TODO: onDoubleTap --> mark done, and turn into input */}
        {note.items?.map(item => (
          <View key={note.id} style={styles.item}>
            <CheckBox size={18} fillColor='#ccc' onPress={onToggleItem} />
            <Text style={{ fontFamily: 'monospace' }}>{item}</Text>
          </View>
        ))}
        <View style={styles.addNewItem}>
          <CheckBox
            size={18}
            style={{ opacity: 0 }}
            fillColor='#ccc'
            onPress={onToggleItem}
          />
          <TextInput style={styles.addNewItemInput} placeholder='Add item..' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '0.75rem',
    padding: '1rem',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
  },
  items: {
    paddingTop: '0.5rem',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  addNewItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '0.5rem',
  },
  addNewItemInput: {
    fontFamily: 'monospace',
    borderRadius: 5,
    width: '100%',
  },
});
