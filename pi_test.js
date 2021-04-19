
import { sleep, check } from 'k6';
import http from 'k6/http';

export let options = {
    discardResponseBodies: true,
    scenarios: {
      pi: {
        executor: 'ramping-arrival-rate',
        startRate: 50,
        timeUnit: '1s',
        preAllocatedVUs: 50,
        maxVUs: 100,
        stages: [
          { target: 200, duration: '30s' },
          { target: 0, duration: '30s' },
        ],
      },
    },
  };  

export default function () {
    const res = http.get('https://test.k6.io/pi.php?decimals=11');
    check(res, {
        'status is 200': (r) => r.status == 200,
    });
    sleep(3);
}

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...');
    return {
        'pi_report/pi.json': JSON.stringify(data),
    }
}