/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { IItemValue } from "../../src/IItemValue";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("adds the item to keys", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr();

    // Act
    ItemsHolder.addItem("color");

    // Act
    chai.expect(ItemsHolder.getItemKeys()).to.be.deep.equal(["color"]);
});

mochaLoader.it("leaves value as undefined if no settings passed in", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr();

    // Act
    const item: IItemValue = ItemsHolder.addItem("color");

    // Act
    chai.expect(item.getValue()).to.equal(undefined);
});
