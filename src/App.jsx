import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/Counter_slice.js';

function App() {
	// reading data
	const count = useSelector((state) => state.counter.value);

	// changing data
	const dispatch = useDispatch();

	return (
		<>
			<h1>React-Redux-Toolkit</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<h1>{count}</h1>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</>
	);
}

export default App;
