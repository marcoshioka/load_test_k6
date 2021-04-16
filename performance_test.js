import { sleep, check } from 'k6';
import http from 'k6/http';
export let options = {
    duration: '1m',
    vus: 50,
    thresholds: {
        http_req_duration: ['p(80)<500'], // 80 percent of response times must be below 500ms
    },
};

export default function () {
    const res = http.get('http://test.k6.io/contacts.php');
    check(res, {
        'status is 200': (r) => r.status == 200,
    });
    sleep(3);
}

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...');
    return {
        'report/summary.json': JSON.stringify(data),
    }
}