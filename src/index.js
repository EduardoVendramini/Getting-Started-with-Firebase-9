import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where, orderBy
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w0gPpwCgnDSdGM6F8Cu0PJOhSYBNXLA",
  authDomain: "test-f5e54.firebaseapp.com",
  projectId: "test-f5e54",
  storageBucket: "test-f5e54.appspot.com",
  messagingSenderId: "1031701932584",
  appId: "1:1031701932584:web:462bc37cd0bcf5f5a5e31d",
  measurementId: "G-MFGZ4NCL58"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')


// show all documents form
const showAllhBookForm = document.querySelector('.showAll');

// event listener for the "Show all docs" button
showAllhBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let books = [];

  // Query to get all documents
  const allDocsQuery = query(colRef);

  // Fetch all documents
  onSnapshot(allDocsQuery, (snapshot) => {
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.clear();
    console.log('All Documents:', books);
  });
});


// search form
const searchBookForm = document.querySelector('.search')
searchBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const q = query(colRef, where("title", "==", searchBookForm.searchTitle.value, orderBy("author", "asc")));

  onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.clear();
    console.log("Searched items:", books);
  });
});

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
    .then(() => {
      addBookForm.reset()
    })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})