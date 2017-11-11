export const getSettings = ({
    commit
  }) => axios
  .get(route('settings.index'))
  .then((response) => {
    commit('setSettings', response.data.data)
  })

export const getSetting = ({
    commit
  }, {
    id
  }) => axios
  .get(route('settings.show', id))
  .then((response) => {
    commit('setSetting', response.data.data)
  })

export const updateSetting = ({
  dispatch
}, {
  payload,
  context,
  id
}) => {
  return new Promise((resolve, reject) => {
    axios.put(route('settings.update', id), payload)
      .then((response) => {
        resolve(response.data)
        dispatch('noti', {
          message: '¡Los Datos se han actualizado con Exito!',
          type: 'success'
        }, {
          root: true
        })
      }).catch((error) => {
        context.errors = error.response.data.errors;
        reject(error.response.data.errors)
      })
  });
};
