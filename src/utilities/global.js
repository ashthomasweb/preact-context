export function Elem(input) {
  return document.createElement(input)
}

export function Event(input, type, callback) {
  return input.addEventListener(type, callback)
}
