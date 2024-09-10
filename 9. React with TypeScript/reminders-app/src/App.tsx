import './App.css';
import ReminderList from './components/ReminderList';

const reminders = [
  { id: 1, title: 'Meeting with John' },
  { id: 2, title: 'Buy groceries' },
  { id: 3, title: 'Call mom' },
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
