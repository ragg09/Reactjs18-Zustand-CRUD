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

			//GET ALL | VIEW
			getCakeAPI: async () => {
				const apiResponse = await axios.get(
					"http://localhost:4000/cakes"
				);
				set((state) => {
					state.cakeData = apiResponse.data;
				});
			},

			//CREATE
			addCakeAPI: async (payload) => {
				const apiResponse = await axios.post(
					"http://localhost:4000/cakes",
					payload
				);
				set((state) => {
					state.cakeData.push(apiResponse.data);
				});
			},
		}))
	)
);
