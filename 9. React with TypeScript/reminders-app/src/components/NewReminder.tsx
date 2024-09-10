import { useState } from "react";

function NewReminder(): JSX.Element {
    const [title, setTitle] = useState('');

    return (
        <form>
            <label htmlFor="title">New Reminder</label>
            <input id="title" type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>

    );
}

export default NewReminder;