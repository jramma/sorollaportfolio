const icons = import.meta.glob("/src/icons/**/*.svg");

export const getRandomIcon = (folder: string) => {
  const iconKeys = Object.keys(icons);
  const pathIcons = iconKeys.filter((k) => k.includes(`/src/icons/${folder}/`));
  const iconNames = pathIcons.map((icon) => {
    const filenameWithExt = icon.split("/").pop();
    if (filenameWithExt) {
      return filenameWithExt.replace(".svg", "");
    }
  });
  const randomIcon = iconNames[Math.floor(Math.random() * iconNames.length)];
  return `${folder}/${randomIcon}`;
};

export const getRandomClass = (classArray: string[]) => {
  return classArray[Math.floor(Math.random() * classArray.length)];
};
