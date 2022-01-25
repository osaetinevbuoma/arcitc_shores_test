import { expect } from "chai";
import { describe, test } from "mocha";
import supertest from "supertest";
import app from "../server";

describe("Testing server endpoints", () => {
  test("default router", (done) => {
    supertest(app)
      .get("/api")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect({ message: "Hello World" })
      .expect(200, done);
  });

  test("search endpoint", async () => {
    const res = await supertest(app).get("/api/search/pnemonia_detection");
    expect("Content-Type", "application/json; charset=utf-8");
    expect(res.body).to.have.property("items");
    expect(res.body.items.length).to.be.greaterThanOrEqual(0);
  });
});
