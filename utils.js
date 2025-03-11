export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getRandomString = (length) => {
  return "12343235r3rf";
};

export const getRandomArray = (length, min, max) => {
  return Array.from({ length }, () => getRandomInt(min, max));
};

export const getRandomObject = (length, min, max) => {
  return Array.from({ length }, () => getRandomInt(min, max));
};
