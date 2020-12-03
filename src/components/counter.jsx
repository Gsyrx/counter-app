/*

// <----- first react component ----->

import React, { Component } from 'react'; // imrc

// cc
class Counter extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default Counter;

*/

/*

// <----- specifying children ----->

import React, { Component } from 'react'; // imrc

// cc
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;

*/

/*

// <----- embedding expression ----->

import React, { Component } from 'react'; // imrc

// cc
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;

*/

// <----- setting attributes ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//     // <1>
//     // imageURL: 'https://picsum.photos/200',
//   };

//   /*
//   // <2>
//   styles = {
//     fontSize: 10,
//     fontWeight: 'bold',
//   };
//   */

//   render() {
//     return (
//       <div>
//         {/* 1 */}
//         {/*<img src={this.state.imageURL} alt="" />*/}

//         {/* 2 */}
//         {/*<span style={this.styles} className="badge badge-primary m-2">
//           {this.formatCount()}
//         </span>*/}

//         <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
//           {this.formatCount()}
//         </span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//       </div>
//     );
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Rendering Classes Dynamically ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     // <1>
//     // let classes = 'badge m-2 badge-';
//     // classes += this.state.count === 0 ? 'warning' : 'primary';

//     return (
//       <div>
//         {/* <1> */}
//         {/* <span className={classes}>{this.formatCount()}</span> */}
//         <span className={this.getBAdgeClasses()}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//       </div>
//     );
//   }

//   getBAdgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Rendering List ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ['tag1', 'tag2', 'tag3'],
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBAdgeClasses()}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   getBAdgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Conditional Rendering ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ['tag1', 'tag2', 'tag3'],
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && 'Please create a new tag!'}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }

// export default Counter;

// // <----- Handling Events ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement() {
//     console.log('Increment Clicked');
//   }

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Binding Event Handlers ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   /*
//   constructor() {
//     super();
//     // console.log('Constuctor', this);
//     this.handleIncrement = this.handleIncrement.bind(this); // bind method will return a new instance of handleIncrement() and in that fuction 'this' will always refer to current object
//   }

//   handleIncrement() {
//     // now access to the current object(Counter)
//     console.log('Increment Clicked', this);
//   }
//   */
//   handleIncrement = () => {
//     // this :-   current object(Counter)
//     console.log('Increment Clicked', this);
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Updating State ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   handleIncrement = () => {
// this.setState will update and merge also(if there is no property) of the state
//     this.setState({ count: this.state.count + 1 }); // it rerender everytime when the button is clicked(ie increment the count value)
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Passing Event Arguments ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   /*
//   // <1>
//   handleIncrement = (product) => {
//     console.log(product);
//     this.setState({ count: this.state.count + 1 }); // it rerender everytime when the button is clicked(ie increment the count value)
//   };

//   doHandleIncrement = () => {
//     this.handleIncrement({ id: 1 });
//   };
//   */

//   handleIncrement = (product) => {
//     console.log(product);
//     this.setState({ count: this.state.count + 1 }); // it rerender everytime when the button is clicked(ie increment the count value)
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         {/* <1>
//         <button
//           onClick={this.doHandleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>*/}

//         <button
//           onClick={() => this.handleIncrement({ id: 1 })}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.count === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? 'Zero' : count;
//   }
// }

// export default Counter;

// // <----- Section-4 (Composing Components) ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//   };

//   handleIncrement = () => {
//     this.setState({ value: this.state.value + 1 }); // it rerender everytime when the button is clicked(ie increment the value)
//   };

//   render() {
//     /*
//       < ----- 'props' ----- >
//       every react component has a property called 'props'
//       it is basically a plain JS Object and it contains all the attributes
//       that we set on Counter (ie in counters.jsx)
//       (ie value,selected,key is not a part because it is a special attributes that is used to uniquely identify elements )
//       2) props are read only (means we can't change the inputs in components)
//     */

//     // <1>
//     // props {value: 4, selected: true} (4 times)
//     // console.log('props', this.props);

//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.props.onDelete(this.props.counter.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.state.value === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { value } = this.state;
//     return value === 0 ? 'Zero' : value;
//   }
// }

// export default Counter;

// <----- Single Source of truth ----->
// // <----- Removing the Local State ----->

// import React, { Component } from 'react'; // imrc

// // cc
// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

//         <button
//           onClick={() => this.props.onIncrement(this.props.counter)}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.props.onDelete(this.props.counter.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = 'badge m-2 badge-';
//     classes += this.props.counter.value === 0 ? 'warning' : 'primary';
//     return classes;
//   }

//   formatCount() {
//     const { value } = this.props.counter;
//     return value === 0 ? 'Zero' : value;
//   }
// }

// export default Counter;

// <----- Decrement Button ----->
// <----- Like Component ----->

import React, { Component } from 'react'; // imrc

// cc
class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
