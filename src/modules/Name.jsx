// export default function Name(props){
//     return <div>
//         {props.name}
//     </div>
// }

// import * as React from 'react';
import '../css/style.css';

class Name extends React.Component {
  render() {
    return (
      <div className="input">
        {this.props.name}
      </div>
    );
  }
}

export default Name;
