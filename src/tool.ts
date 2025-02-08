export const getRandomClass = (classArray: string[]) => {
  return classArray[Math.floor(Math.random() * classArray.length)];
};
