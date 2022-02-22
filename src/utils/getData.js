export const getData = async () => {
  try {
    const resp = await fetch ('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');

    if (!resp.ok) throw { status: resp.status, statusText: resp.statusText }

    const { results } = await resp.json();

    return results

  } catch (error) {
    let message = error.statusText || 'Not Found';

    return `Error ${error.status}: ${message}`
  }
}