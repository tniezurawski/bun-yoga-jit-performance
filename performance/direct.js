import http from 'k6/http';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export default function () {
  const url = 'http://localhost:3000/graphql';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(
    url,
    JSON.stringify({
      operationName: 'Products',
      variables: {},
      query: `query Products {
        products {
          id
          direct
        }
       }`,
    }),
    params,
  );
}

export function handleSummary(data) {
  return {
    'performance/benchmarking-summary.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
