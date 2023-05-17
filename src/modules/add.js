const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ob5Ir4JQTiMS1JMO5Y36/scores/';

export const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.result;
  } catch (error) {
    return error;
  }
};

export const postData = async (score) => {
  try {
    const results = await fetch(url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });
    return results;
  } catch (error) {
    return error;
  }
};