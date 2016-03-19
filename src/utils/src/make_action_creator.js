export const makeActionCreator = (type, ...argNames) =>
  (...args) => {
    let action = { type }
    argNames.forEach((name, i) => {
      action[argNames[i]] = args[i]
    })
    return action
  }
