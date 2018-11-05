import { check, fail, group, sleep } from "k6";
import crypto from "k6/crypto";
import encoding from "k6/encoding";
import parseHTML from "k6/html";
import http from "k6/http";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import ws from "k6/ws";
export let options = {"stages":[
  {"duration":"10s","target":5},
  {"duration":"10s"},
  {"duration":"10s","target":10}
]};

export default function() {
  http.get("http://test.loadimpact.com");
  console.log(`VU: ${__VU}  -  ITER: ${__ITER}`);
  sleep(1);
}
