export default (fn, ms) => () => {
    clearTimeout(fn.timeout);
    fn.timeout = setTimeout(fn, ms);
};
