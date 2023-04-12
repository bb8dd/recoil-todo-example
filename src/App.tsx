import React from 'react';
import { RecoilRoot } from 'recoil';
import styles from './App.module.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className={styles['todo-container']}>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
