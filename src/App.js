// import { useEffect, useState } from 'react';
// import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api';

// import { createTodo } from './graphql/mutations.ts';
// import { listTodos } from './graphql/queries.ts';

// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import PropTypes from 'prop-types'

// import amplifyconfig from './amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

// const initialState = { name: '', description: '' };
// const client = generateClient();

// const App = ({signOut, user}) => {
//   const [formState, setFormState] = useState(initialState);
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = await client.graphql({
//         query: listTodos
//       });
//       const todos = todoData.data.listTodos.items;
//       setTodos(todos);
//     } catch (err) {
//       console.log('error fetching todos');
//     }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return;
//       const todo = { ...formState };
//       setTodos([...todos, todo]);
//       setFormState(initialState);
//       await client.graphql({
//         query: createTodo,
//         variables: {
//           input: todo
//         }
//       });
//     } catch (err) {
//       console.log('error creating todo:', err);
//     }
//   }

//   return (
//     <div style={styles.container}>
//     <Heading level={1}>Hello {user.username}</Heading>
//     <Button onClick={signOut}>Sign out</Button>
//     <h2>Amplify Todos</h2>
//     ...
//   </div>
//   );
// };

// App.propTypes = {
//   signOut: PropTypes.func,
//   user: PropTypes.object
// }

// const styles = {
//   container: {
//     width: 400,
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 20
//   },
//   todo: { marginBottom: 15 },
//   input: {
//     border: 'none',
//     backgroundColor: '#ddd',
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18
//   },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: {
//     backgroundColor: 'black',
//     color: 'white',
//     outline: 'none',
//     fontSize: 18,
//     padding: '12px 0px'
//   }
// };

// export default withAuthenticator(App);



import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {ReviewNavBar, ReviewCardCollection, UINewReview, UIEditReview, DiaryCreateForm, DiaryUpdateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><ReviewNavBar/><ReviewCardCollection/></div>}/>
        <Route exact path='/new' element={<UINewReview/>} />
        <Route exact path='/edit/:cid' element={<UIEditReview/>} />
        <Route exact path='/create' element={<DiaryCreateForm/>} />
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);

