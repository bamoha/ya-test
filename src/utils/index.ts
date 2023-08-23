export function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = Number(a[key].toString().replace(",", ""));
    const varB = Number(b[key].toString().replace(",", ""));

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
