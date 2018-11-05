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
  if(__VU <= 5){
    console.log('User less than 5')
  } else if (__VU >= 6){
    console.log('User greater than 5');
  }  
  console.log(`VU: ${__VU}  -  ITER: ${__ITER}`);
  sleep(1);
}
  /*
  if (__ITER % 5 == 0) {
  test_url1 // 20%
  } else if (__ITER % 5 == 1) {
  tert_url2 // 20%
  } else {
  test_url3 // 60%
  }
  */
