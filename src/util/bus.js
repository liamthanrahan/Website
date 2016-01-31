const listeners = []
export const listen = fn => listeners.push(fn)
export const publish = data => listeners.forEach(fn => fn(data))