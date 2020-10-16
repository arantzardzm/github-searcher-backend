export const checkAlphaRegex = (string: any) => {
  const regex = /^[a-z]+$/; // TODO verify
  const result = string.match(regex);
  return !!result && result[0] === string;
};

export const checkAlphaNumRegex = (string: any) => {
  const regex = /^[a-zA-Z0-9_-]+$/; // TODO verify
  const result = string.match(regex);
  return !!result && result[0] === string;
};
