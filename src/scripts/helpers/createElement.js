
const createElement = (options) => {
  const {
    tag = 'div', 
    text = '', 
    classes = [], 
    attr = {}, 
    children = [],
    handlers = {}
  } = options;

  const element = document.createElement(tag);
  
  if (text) {
    element.textContent = text;
  }

  if (classes.length) {
    element.classList.add(...classes)
  }

  if (children.length) {
    children.forEach((child) => element.append(createElement(child)))
  }

  Object.entries(attr).forEach(([key, value]) => element.setAttribute(key, value));

  Object.entries(handlers).forEach(([event, handler]) => {
    if (typeof handler === 'function') {
      element.addEventListener(event, handler)
    } else if (Array.isArray(handler)) {
      const [func, opt] = handler;
      element.addEventListener(event, func, opt)
    }
  })

  return element;
}

export default createElement;