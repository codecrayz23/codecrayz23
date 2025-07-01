import React, { useState } from 'react';
import { Search, Plus, Folder, Edit3, Trash2, Calendar } from 'lucide-react';

function CornellNotesApp() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [folders] = useState(['All Notes', 'Personal', 'Work', 'Study']);
  const [selectedFolder, setSelectedFolder] = useState('All Notes');

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      folder: selectedFolder === 'All Notes' ? 'Personal' : selectedFolder,
      cueColumn: '',
      noteArea: '',
      summary: '',
      created: new Date().toISOString(),
      modified: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setCurrentNote(newNote);
  };

  const updateNote = (field, value) => {
    if (!currentNote) return;
    
    const updatedNote = {
      ...currentNote,
      [field]: value,
      modified: new Date().toISOString()
    };
    
    setCurrentNote(updatedNote);
    setNotes(notes.map(note => 
      note.id === currentNote.id ? updatedNote : note
    ));
  };

  const deleteNote = (noteId) => {
    const remainingNotes = notes.filter(note => note.id !== noteId);
    setNotes(remainingNotes);
    if (currentNote && currentNote.id === noteId) {
      setCurrentNote(remainingNotes.length > 0 ? remainingNotes[0] : null);
    }
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = !searchTerm || 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.cueColumn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.noteArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFolder = selectedFolder === 'All Notes' || note.folder === selectedFolder;
    
    return matchesSearch && matchesFolder;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-900">Notes</h1>
            <button
              onClick={createNewNote}
              className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="px-4 py-2 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Folder size={16} className="text-gray-500" />
            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="flex-1 text-sm border-0 bg-transparent focus:outline-none text-gray-700"
            >
              {folders.map(folder => (
                <option key={folder} value={folder}>{folder}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredNotes.map(note => (
            <div
              key={note.id}
              onClick={() => setCurrentNote(note)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                currentNote && currentNote.id === note.id ? 'bg-yellow-50 border-yellow-200' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{note.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {note.noteArea || note.cueColumn || 'No content'}
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    {formatDate(note.modified)}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {currentNote ? (
          <>
            <div className="p-6 border-b border-gray-200 bg-white">
              <input
                type="text"
                value={currentNote.title}
                onChange={(e) => updateNote('title', e.target.value)}
                className="text-2xl font-semibold text-gray-900 border-0 focus:outline-none w-full bg-transparent"
                placeholder="Note Title"
              />
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                Modified {formatDate(currentNote.modified)}
              </div>
            </div>

            <div className="flex-1 p-6 bg-white">
              <div className="h-full flex flex-col">
                <div className="flex-1 flex gap-6 mb-6">
                  <div className="w-1/4">
                    <div className="h-full border-r-2 border-gray-200 pr-4">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">Cues & Questions</h3>
                      <textarea
                        value={currentNote.cueColumn}
                        onChange={(e) => updateNote('cueColumn', e.target.value)}
                        placeholder="Key points, questions, keywords..."
                        className="w-full h-full resize-none border-0 focus:outline-none text-sm leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Notes</h3>
                    <textarea
                      value={currentNote.noteArea}
                      onChange={(e) => updateNote('noteArea', e.target.value)}
                      placeholder="Take your detailed notes here..."
                      className="w-full h-full resize-none border-0 focus:outline-none text-sm leading-relaxed"
                    />
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Summary</h3>
                  <textarea
                    value={currentNote.summary}
                    onChange={(e) => updateNote('summary', e.target.value)}
                    placeholder="Summarize the main points and key takeaways..."
                    className="w-full h-24 resize-none border-0 focus:outline-none text-sm leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white">
            <div className="text-center">
              <Edit3 size={48} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-xl font-medium text-gray-500 mb-2">No Note Selected</h2>
              <p className="text-gray-400">Choose a note from the sidebar or create a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CornellNotesApp;