import { freeParking } from "./freeParking";

test(`can have the name Free Parking`, () => {
  expect(freeParking.name).toBe("Free Parking");
});

test(`is not purchasable`, () => {
  expect(freeParking.isPurchasable).toBe(false);
});

test(`has 0 rent`, () => {
  expect(freeParking.rent).toBe(0);
});
