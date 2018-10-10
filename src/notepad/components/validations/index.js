import React from 'react';
import styles from './styles.scss';

function Validations(props) {
  const validations = props.validations.map(validation =>
    <li className="validations">{validation}</li>,
  );
  return (
    <ul>
      {validations}
    </ul>
  );
}

export default Validations;
