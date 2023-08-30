export const handlePromise = async (cb) => {
  try {
    const response = await cb;
    return [null, response];
  } catch (err) {
    return [err, null];
  }
};
