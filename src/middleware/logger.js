export const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }
  console.log('type:', action.type)
  console.log('type:', action.payload)

  console.log('current state', store.getState())

  next(action)
  console.log('nextstate', store.getState())
}
