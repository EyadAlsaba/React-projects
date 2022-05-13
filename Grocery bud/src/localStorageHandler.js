export const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
export const totalSum = () => {
  let total = localStorage.getItem('total')
  if (total > 0) {
    return (total = parseInt(localStorage.getItem('total')))
  } else {
    return 0
  }
}