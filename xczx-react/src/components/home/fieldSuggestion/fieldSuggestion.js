import React from 'react';
import { fieldSuggested } from '../../../constants/home';

const FieldSuggestion = () => {
  return (
    <div className="card flex space-between">
      <dl className="flex">
        <dt>{fieldSuggested.title}</dt>
        {fieldSuggested.suggestedFields.map((field, index) => (
          <dd key={field+index}>
            <a href="/#">{field}</a>
          </dd>
        ))}
      </dl>
      <div className="modify-interested-field">
        <a href=".#">修改兴趣</a>
      </div>
    </div>
  );
};

export default FieldSuggestion;
