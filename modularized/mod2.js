import { check, fail, group, sleep } from "k6";
import crypto from "k6/crypto";
import encoding from "k6/encoding";
import parseHTML from "k6/html";
import http from "k6/http";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import ws from "k6/ws";

export function modtwo(){
  let kevresp;
  group('checkApple', () => {
    sleep(1);
    
    kevresp = http.get('http://www.apple.com');
    
    check(kevresp, {
    "check body length on all http requests": (res) => res.body.length >= 3,
    "check resp 200": (res) => res.status === 200,
    });
  });
}
