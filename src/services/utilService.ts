export const utilService = {
  makeId,
  getRandomColor,
};

function makeId(length = 5): string {
  let id = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  possible += possible.toLowerCase();
  possible += '0123456789';
  for (let i = 0; i < length; i++)
    id += possible.charAt(Math.floor(Math.random() * possible.length));

  return id;
}

function getRandomColor(): string {
  const colors = ['#FFFFFF', '#EBFFD4', '#D4EBFF'];
  const rand: number = Math.floor(Math.random() * colors.length);
  return colors[rand];
}
