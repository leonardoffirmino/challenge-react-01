import { Header } from './components/Header';
import { InfoTaks } from './components/InfoTask';
import { Taks } from './components/Task';


import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Taks />

      <InfoTaks />

    </div>
  )
}