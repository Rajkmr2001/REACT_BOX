
import Display from './Components/Display';
import AppName from './Components/AppName';
import styles from "./App.module.css";
import './App.css'
import Button from './Components/Button';

function App() {

  return (
    <div className={styles.calculator}>
      <AppName />
      <Display />
      <Button />
    </div>
  )
}

export default App
