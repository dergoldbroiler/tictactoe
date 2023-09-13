const compareSingleMatch = (match, state) => {
  let matched = 0;
  state.forEach((item) => {
    if (match.includes(item)) {
      matched++;
    }
  });
  return matched === 3 ? true : false;
}

export const isMatch = (state) => {
    const matches = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // vertical
        [1, 5, 9], [3, 5, 7] // diagonal
    ];

    let isMatch = false;

    matches.forEach(match => {
        if (compareSingleMatch(match, state)) {
            isMatch = true;
        }
    });

    return isMatch;
}