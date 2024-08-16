db = db.getSiblingDB('noteapp'); // Switch to the 'noteapp' database

db.createUser({
  user: 'noteuser',
  pwd: 'notepassword',
  roles: [{ role: 'readWrite', db: 'noteapp' }],
});

db.notes.insert({ title: 'Welcome Note', content: 'This is your first note!' });
