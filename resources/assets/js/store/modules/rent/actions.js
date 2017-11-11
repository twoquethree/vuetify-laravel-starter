export const getRentTable = ({
		commit
	}, {
		type
	}) => axios
	.get(route('rents.index.type', type))
	.then((response) => {
		if (type == 1) {
			commit('setRentM', response.data.data)
		} else if (type === 2) {
			commit('setRentQ', response.data.data)
		}
	})

export const getRent = ({
		commit
	}, {
		id
	}) => axios
	.get(route('rents.show', id))
	.then((response) => {
		commit('setRent', response.data.data)
	})

export const updateRent = ({
	dispatch
}, {
	payload,
	context,
	id
}) => {
	return new Promise((resolve, reject) => {
		axios.put(route('rents.update', id), payload)
			.then((response) => {
				resolve(response.data)
				dispatch('noti', {
					message: '¡Los Datos se han actualizado con Exito!',
					type: 'success'
				}, {
					root: true
				})
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
				reject(error.response.data.errors)
			})
	});
};
