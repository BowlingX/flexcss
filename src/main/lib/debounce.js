export default (fn, ms) => (...args) => {
  clearTimeout(fn.timeout);
  fn.timeout = setTimeout(fn.bind(this, ...args), ms);
  return fn.timeout;
};
