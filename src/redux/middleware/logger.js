
/*
  applyMiddleware передает нам аргументы:
    store - redux-store нашего приложения;
    next - функция-обертка, которая позволяет продолжить выполнение цепочки;
    action - действе вызванное через store.dispatch
*/

const logger = store => next => action => {
  return next(action);
};

export default logger;
// export const logger = function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log(action);
//       return next(action);
//     };
//   };
// };
