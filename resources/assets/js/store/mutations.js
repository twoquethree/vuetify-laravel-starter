export const setNoti = (state, payload) => {
  state.noti.message = payload.message
  state.noti.type = payload.type
  state.noti.show = true
}
