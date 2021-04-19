import { sleep, check } from 'k6';
import http from 'k6/http';
export let options = {
    vus: 200,
    iterations: 6000,
    thresholds: {
        http_req_duration: ['p(80)<400'], // 80 percent of response times must be below 400ms
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
        'contacts_report/contacts.json': JSON.stringify(data),
    }
}