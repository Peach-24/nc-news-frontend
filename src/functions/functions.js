export const dateFormatter = (str) => {
  let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const year = str.slice(0, 4);
  const month = Number(str.slice(5, 7));
  const date = Number(str.slice(8, 10));

  return `${months[month]} ${date}, ${year}`;
};

export const bodyFormatter = (str) => {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.') {
      arr.splice([i + 1], 0, `\n`);
    }
  }
  let finalBody = arr.join('');
  return finalBody;
};
