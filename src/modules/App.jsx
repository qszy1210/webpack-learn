// import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Name from './Name.jsx';
import Require from './Require.jsx';

export function start(){
    ReactDOM.render(<Application></Application>, document.getElementById('app'));
}


function Application() {
    return <>
        <Name name="qs"></Name>
        <Require></Require>
    </>
}