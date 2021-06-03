import React from 'react';

const FooterLink = (props) => {
  const key = props?.subLinks?.key;
  const options = props?.subLinks?.options;
  return (
    <dl>
      <dt>{key}</dt>
      {options?.map((opt) => (
        <dd key={opt.name}>
          <a href={opt.url}>{opt.name}</a>
        </dd>
      ))}
    </dl>
  );
};

export default FooterLink;
