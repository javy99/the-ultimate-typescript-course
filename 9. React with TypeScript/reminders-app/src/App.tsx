import { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';



function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Meeting with John' },
    { id: 2, title: 'Buy groceries' },
    { id: 3, title: 'Call mom' },
  ]);

  const addReminder = () => {
    const newReminder: Reminder = {
      id: Math.floor(Math.random() * 1000),
      title: 'New reminder',
    };
    setReminders([...reminders, newReminder]);
  }

  return (
    <div className="App">
      <ReminderList items={reminders} />
      <button onClick={addReminder}>Add reminder</button>
    </div>
  );
}

export default App;
