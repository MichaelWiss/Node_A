console.log('starting notes.js');

var fetchNotes = () => {
   try {
     var notesString = fs.readFileSync('notes-data.json');
     return JSON.parse(notesString);
    } catch (e) {

	}
};

var saveNotes = (notes) => {

};

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	

    var duplicateNotes = notes.filter((note) => note.title === title);
  
    if (duplicateNotes.length === 0) {
    	notes.push(note);
	    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
   console.log('Getting note', title);
}

var removeNote = (title) => {
	console.log('Removing note', title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
