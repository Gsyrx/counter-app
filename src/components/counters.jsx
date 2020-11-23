// // < ----- SECTION-4 ----- >

// import React, { Component } from 'react';
// import Counter from './counter';
// class Counters extends Component {
//   // the component that owns a piece of the state,
//   // should be the one modifying it.
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters }); // {counters: counters} both key and value are same so reduced it to one
//   };

//   render() {
//     return (
//       <div>
//         {this.state.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.handleDelete}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

/* 
<1>
render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
*/

// // < ----- Single Source of truth ----- >
// // <----- Removing the Local State ----->

// import React, { Component } from 'react';
// import Counter from './counter';
// class Counters extends Component {
//   // the component that owns a piece of the state,
//   // should be the one modifying it.
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters }); // {counters: counters} both key and value are same so reduced it to one
//   };

//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.handleReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.state.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.handleDelete}
//             onIncrement={this.handleIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

// <----- Multiple Components in Sync ----->
// // <----- Lifting the state up ----->

// import React, { Component } from 'react';
// import Counter from './counter';
// class Counters extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

// // <----- Destructuring Arguments ----->

// import React, { Component } from 'react';
// import Counter from './counter';
// class Counters extends Component {
//   render() {
//     const { onReset, counters, onDelete, onIncrement } = this.props;
//     return (
//       <div>
//         <button onClick={onReset} className="btn btn-primary btn-sm m-2">
//           Reset
//         </button>
//         {counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={onDelete}
//             onIncrement={onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

// <----- Decrement Button ----->
// <----- Like Component ----->

import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
