/**
 * "About this sample": the note at the top of every writing sample.
 *
 * It answers the five questions a reviewer asks before reading: who the page
 * is for, what it has to do, what limited it, what it was built with, and
 * what the writer decided. The children are the decisions, written as
 * Markdown. `roles` tags the sample by the kind of team it is meant for.
 */
import React from 'react';

export default function AboutSample({audience, goal, constraints, tools, roles = [], children}) {
  return (
    <aside className="about-sample" aria-labelledby="about-this-sample">
      <p id="about-this-sample" className="about-sample__title">
        About this sample
      </p>
      {roles.length > 0 && (
        <ul className="about-sample__roles" aria-label="Written for these kinds of roles">
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      )}
      <dl className="about-sample__facts">
        <div>
          <dt>Audience</dt>
          <dd>{audience}</dd>
        </div>
        <div>
          <dt>Goal</dt>
          <dd>{goal}</dd>
        </div>
        <div>
          <dt>Constraints</dt>
          <dd>{constraints}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{tools}</dd>
        </div>
      </dl>
      <details className="about-sample__more">
        <summary>What I decided and why</summary>
        <div className="about-sample__decisions">{children}</div>
      </details>
    </aside>
  );
}
