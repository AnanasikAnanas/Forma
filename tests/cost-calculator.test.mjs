import assert from "node:assert/strict";
import test from "node:test";
import { calculateEstimate } from "../src/lib/cost-calculator.ts";

test("landing starts at the published base price", () => {
  assert.deepEqual(
    calculateEstimate({
      type: "landing",
      pages: 1,
      cms: false,
      catalog: false,
      form: false,
      booking: false,
      multilingual: false,
      urgent: false,
    }),
    { min: 35000, max: 45000 },
  );
});

test("optional features increase the estimate", () => {
  const basic = calculateEstimate({
    type: "multipage",
    pages: 5,
    cms: false,
    catalog: false,
    form: true,
    booking: false,
    multilingual: false,
    urgent: false,
  });
  const expanded = calculateEstimate({
    type: "multipage",
    pages: 5,
    cms: true,
    catalog: true,
    form: true,
    booking: true,
    multilingual: true,
    urgent: false,
  });
  assert.ok(expanded.min > basic.min);
  assert.ok(expanded.max > expanded.min);
});

test("urgent projects include the urgency factor", () => {
  const regular = calculateEstimate({
    type: "redesign",
    pages: 4,
    cms: false,
    catalog: false,
    form: true,
    booking: false,
    multilingual: false,
    urgent: false,
  });
  const urgent = calculateEstimate({
    type: "redesign",
    pages: 4,
    cms: false,
    catalog: false,
    form: true,
    booking: false,
    multilingual: false,
    urgent: true,
  });
  assert.ok(urgent.min >= regular.min * 1.2);
});
