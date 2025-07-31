import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer();

	return (
		<div className="text-center mt-5">

			<h1>¡Bienvenido!</h1>
			<div className="my-5"></div>
			<h3>Revise su lista de contactos en el navbar</h3>
			
		</div>
	);
}; 