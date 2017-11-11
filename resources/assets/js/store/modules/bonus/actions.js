export const getBonuses = ({
		commit
	}) => axios
	.get(route('bonus.index'))
	.then((response) => {
		commit('setBonuses', response.data.data)
	})

export const getBonus = ({
		commit
	}, {
		id
	}) => axios
	.get(route('bonus.show', id))
	.then((response) => {
		commit('setBonus', response.data.data)
	})

export const updateBonus = ({
	dispatch
}, {
	payload,
	context,
	id
}) => {
	return new Promise((resolve, reject) => {
		axios.put(route('bonus.update', id), payload)
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
