/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("should throw an error for an unknown item", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr();

    // Act
    const test: Function = (): void => ItemsHolder.saveItem("color");

    // Assert
    chai.expect(test).to.throw("Unknown key given to ItemsHoldr: 'color'.");
});

mochaLoader.it("saves item to localStorage", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            color: {
                valueDefault: "red"
            }
        }
    });

    // Act
    ItemsHolder.setItem("color", "blue");
    ItemsHolder.saveItem("color");

    // Assert
    chai.expect(ItemsHolder.getObject("color").retrieveLocalStorage()).to.equal("blue");
});
