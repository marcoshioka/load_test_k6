
import { sleep, check } from 'k6';
import http from 'k6/http';

export let options = {
    discardResponseBodies: true,
    scenarios: {
        news: {
            executor: 'constant-arrival-rate',
            rate: 200, // 200 RPS, since timeUnit is the default 1s
            duration: '1m',
            preAllocatedVUs: 50,
            maxVUs: 100,
        },
    },
};

export default function () {
    const res = http.get('http://test.k6.io/news.php');
    check(res, {
        'status is 200': (r) => r.status == 200,
    });
    sleep(3);
}

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...');
    return {
        'news_report/news.json': JSON.stringify(data),
    }
}