export const toJson = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const getImageSize = (name) => {
  let size = {};
  switch (name) {
    case "mercury":
      size = {
        sm: 111,
        md: 184,
        lg: 290,
      };
      break;
    case "venus":
      size = {
        sm: 154,
        md: 253,
        lg: 400,
      };
      break;
    case "earth":
      size = {
        sm: 173,
        md: 285,
        lg: 450,
      };
      break;
    case "mars":
      size = {
        sm: 129,
        md: 213,
        lg: 336,
      };
      break;
    case "jupiter":
      size = {
        sm: 224,
        md: 369,
        lg: 584,
      };
      break;
    case "saturn":
      size = {
        sm: 256,
        md: 422,
        lg: 666,
      };
      break;
    case "uranus":
      size = {
        sm: 176,
        md: 290,
        lg: 458,
      };
      break;
    case "neptune":
      size = {
        sm: 173,
        md: 285,
        lg: 450,
      };
      break;

    default:
      break;
  }
  return size;
};
