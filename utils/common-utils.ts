export const tryJSONParse = (jsonString: string) => {
  let returnValue = null;
  try {
    returnValue = JSON.parse(jsonString);
  } catch (error) {
    console.log(error);
  }
  return returnValue;
};
