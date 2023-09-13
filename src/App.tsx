import { Header } from './components/Header';
import { InfoTaks } from './components/InfoTask';
import { Taks } from './components/Task';


import styles from './App.module.css';


import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.main}>

        <Taks />

        <InfoTaks />

      </div>


    </div>
  )
}