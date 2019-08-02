// @flow

export type Location = {|
  name: string,
  isPurchasable: boolean,
  rent: number
|};

export type RewardingLocation = {|
  ...Location,
  reward: number
|};
