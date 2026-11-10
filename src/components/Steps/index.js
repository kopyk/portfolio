/**
 * Numbered steps for task guides.
 *
 * Wrap a Markdown ordered list. The list stays a real <ol>, so screen readers
 * announce "step 2 of 5" and the page still reads correctly with CSS off.
 * The styling (large numerals, one rule between steps) is in custom.css.
 *
 * `start` continues the count when one procedure is split across headings:
 * <Steps start={4}> with a Markdown list that begins "4.".
 */
import React from 'react';

export default function Steps({start = 1, children}) {
  return (
    <div className="steps" style={{'--steps-start': start - 1}}>
      {children}
    </div>
  );
}
