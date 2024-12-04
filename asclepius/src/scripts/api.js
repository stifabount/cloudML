// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'http://35.219.14.23:3000';
// Test

const ENDPOINT = {
  predict: `${BASE_URL}/predict`, 
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
