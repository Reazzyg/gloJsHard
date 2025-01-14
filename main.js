function cutString(str) {
  try {
    if (typeof str !== 'string') {
      throw new Error('Передана не строка');
    }
    return str.trim().length > 30
      ? str.trim().slice(0, 30) + '...'
      : str.trim();
  } catch (e) {
    console.error(e);
  }
}
