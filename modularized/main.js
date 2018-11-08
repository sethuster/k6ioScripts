import { check, fail, group, sleep } from "k6";
import crypto from "k6/crypto";
import encoding from "k6/encoding";
import parseHTML from "k6/html";
import http from "k6/http";
import { Counter, Gauge, Rate, Trend } from "k6/metrics";
import ws from "k6/ws";

import { modone } from "./mod1.js";
import { modtwo } from "./mod2.js";

export default function(){
  modone();
  modtwo();
}
