import * as React from 'react';


export default class Require extends React.Component {
  render() {
    return (
      <div className="button">
        <button onClick={this.load}>button</button>
      </div>
    );
  }

  load(){
      console.log('test');
    import('./other/alert');
    // require('./other/alert');
  }

}
