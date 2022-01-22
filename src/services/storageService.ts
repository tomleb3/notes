export const storageService = {
  load,
  save,
  remove,
};

function load<T>(key: string): T | null {
  const data: string | null = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  return JSON.parse(data);
}

function save<T>(key: string, value: T): void {
  const data: string = JSON.stringify(value);
  localStorage.setItem(key, data);
}

function remove(key: string): void {
  localStorage.removeItem(key);
}
