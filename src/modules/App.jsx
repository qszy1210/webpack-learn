// import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Name from './Name.jsx';

export function start(){
    ReactDOM.render(<Name name="qs"></Name>, document.getElementById('app'));
}