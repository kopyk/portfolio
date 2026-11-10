/**
 * A checklist a reader can tick off, for quick-reference pages.
 *
 * Ticks are kept in the reader's own browser (localStorage) so the list is
 * still ticked when they come back. Nothing is sent anywhere. Storage can be
 * blocked or full, so every read and write is wrapped: the list works the
 * same without it, it only forgets.
 */
import React, {useEffect, useState} from 'react';
import Translate from '@docusaurus/Translate';

function read(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private windows and full storage land here. The ticks stay on screen.
  }
}

export default function Checklist({id, items}) {
  const key = `checklist:${id}`;
  const [done, setDone] = useState([]);

  // Read after the first paint so the server and the browser render the same HTML.
  useEffect(() => {
    setDone(read(key));
  }, [key]);

  function toggle(index) {
    const next = done.includes(index) ? done.filter((i) => i !== index) : [...done, index];
    setDone(next);
    write(key, next);
  }

  function clear() {
    setDone([]);
    write(key, []);
  }

  return (
    <div className="checklist">
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <label>
              <input type="checkbox" checked={done.includes(index)} onChange={() => toggle(index)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="checklist__status" aria-live="polite">
        <Translate
          id="checklist.status"
          description="Progress line under a checklist"
          values={{done: done.length, total: items.length}}>
          {'{done} of {total} done'}
        </Translate>
        {done.length > 0 && (
          <button type="button" className="checklist__clear" onClick={clear}>
            <Translate id="checklist.clear" description="Button that unticks every item">
              Clear ticks
            </Translate>
          </button>
        )}
      </p>
    </div>
  );
}
