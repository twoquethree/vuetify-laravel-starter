import axios from "axios";
import {
	isEmpty
} from "lodash";
import {
	setHttpToken
} from "../../../helpers";
import localforage from "localforage";

export const login = ({
	dispatch
}, {
	payload,
	context
}) => {
	return new Promise((resolve, reject) => {
		axios.post(route("login"), payload)
			.then((response) => {
				dispatch("setToken", response.data.access_token)
					.then(() => {

						dispatch("fetchUser");
						resolve(response.data);
					});
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
				reject(error.response.data.errors);
			});
	});
};

export const logout = ({
	dispatch
}) => {
	return axios.post(route("logout"))
		.then(() => {
			dispatch("clearAuth");
		})
};

export const fetchUser = ({
	commit
}) => {
	return axios.post(route("me"))
		.then((response) => {
			commit("setAuthenticated", true);
			commit("setUserData", response.data.data);
		})
};

export const setToken = ({
	commit,
	dispatch
}, token) => {
	if (isEmpty(token)) {
		return dispatch("checkTokenExists")
			.then((token) => {
				setHttpToken(token);
			})
	}

	commit("setToken", token);
	setHttpToken(token);
};

export const checkTokenExists = ({
	commit,
	dispatch
}, token) => {
	return localforage.getItem("authtoken")
		.then((token) => {
			if (isEmpty(token)) {
				return Promise.reject("NO_STORAGE_TOKEN");
			}

			return Promise.resolve(token);
		})
};

export const clearAuth = ({
	commit
}, token) => {
	commit("setAuthenticated", false);
	commit("setUserData", null);
	commit("setToken", null);
	setHttpToken(null);
};
