export const getSessionStorage = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

export const getSessionStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

export const getSessionStorage = (name) => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

export const getLocalStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

export const setLocalStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const removeLocalStorage = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}
