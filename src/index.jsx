import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Gifapp = () => {
  return (
    <div>
      <div className="left-scene">
        <div className="form-search form-control input"></div>
      </div>
      <div className="right-scene"></div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Gifapp />, root);
}
