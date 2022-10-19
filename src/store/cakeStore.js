import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//GLOBAL REMINDER
//set = use to update the state property
//devtools = can use redux devtools
//immer = used to

//exporting data for viewing | (CRUD: READ/VIEW, GET)
export const useCakeStore = create(
	devtools(
		immer((set) => ({
			cakeData: [],

			//CREATE
			//payload holds the data
			addCakeAPI: async (payload) => {
				const apiResponse = await axios.post(
					"http://localhost:4000/cakes",
					payload
				);
				set((state) => {
					state.cakeData.push(apiResponse.data);
				});
			},

			//READ
			//GET ALL | VIEW
			getCakeAPI: async () => {
				const apiResponse = await axios.get(
					"http://localhost:4000/cakes"
				);
				set((state) => {
					state.cakeData = apiResponse.data;
				});
			},

			//UPDATE
			updateCakeAPI: async (payload) => {
				const apiResponse = await axios.put(
					`http://localhost:4000/cakes/${payload.id}`,
					payload
				);
				set((state) => {
					//removing the current data in db of the selected ID
					let cakaState = state.cakeData.filter(
						(c) => c.id !== payload.id
					);
					cakaState.push(apiResponse.data);
					state.cakeData = cakaState;
				});
			},

			//DELETE
			deleteCakeAPI: async (id) => {
				const apiResponse = await axios.delete(
					`http://localhost:4000/cakes/${id}`
				);
				set((state) => {
					state.cakeData = state.cakeData.filter((c) => c.id !== id);
				});
			},
		}))
	)
);

//Get item by id
// es6 function
export const getCakeById = (id) => {
	return (state) => {
		let cake = state.cakeData.filter((c) => c.id === Number(id));
		if (cake) {
			return cake[0];
		}
	};
};

//normal function
// export function getCakeById(id) {
// 	return (state) => {
// 		let cake = state.cakeData.filter((c) => c.id === Number(id));
// 		if (cake) {
// 			return cake[0];
// 		}
// 	};
// }
