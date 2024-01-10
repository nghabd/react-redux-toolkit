import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseByFive = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const counterItems = (
		<React.Fragment>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={decrementHandler}>decrement</button>
				<button onClick={increaseByFive}>increaseFive</button>
				<button onClick={incrementHandler}>increment</button>
			</div>
		</React.Fragment>
	);

	const buttonToggle = showCounter ? "show" : "hide";

	return (
		<main className={classes.counter}>
			{!showCounter && counterItems}
			<button
				onClick={toggleCounterHandler}
			>{`${buttonToggle} counter`}</button>
		</main>
	);
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
