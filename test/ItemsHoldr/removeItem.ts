/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("removes an item from itemKeys", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr();
    ItemsHolder.addItem("color");

    // Act
    ItemsHolder.removeItem("color");

    // Assert
    chai.expect(ItemsHolder.getItemKeys().length).to.equal(0);
});

mochaLoader.it("removes an item from localStorage", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            color: {
                valueDefault: "red",
                storeLocally: true
            }
        },
        autoSave: true
    });

    // Act
    ItemsHolder.removeItem("color");

    // Assert
    chai.expect(ItemsHolder.getLocalStorage()["color"]).to.equal(undefined);
});
