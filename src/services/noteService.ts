import { storageService } from './storageService';
import { utilService } from './utilService';

export interface Note {
  id: string;
  title?: string;
  items?: string[];
  color: string;
  createdAt: Date;
}

const STORAGE_KEY = 'notes';

const DEMO_NOTES: Note[] = [
  {
    id: 'demo_note',
    title: 'Tutorial',
    items: ['Test1', 'Test2'],
    color: utilService.getRandomColor(),
    createdAt: new Date(),
  },
];

const blankNote: Note = {
  id: utilService.makeId(),
  color: utilService.getRandomColor(),
  createdAt: new Date(),
};

function query(): Note[] {
  const notesFromStorage: Note[] | null =
    storageService.load<Note[]>(STORAGE_KEY);
  return notesFromStorage ?? DEMO_NOTES;
}

function saveNotes(notes: Note[]) {
  storageService.save(STORAGE_KEY, notes);
}

export const noteService = {
  query,
  saveNotes,
  blankNote,
};
