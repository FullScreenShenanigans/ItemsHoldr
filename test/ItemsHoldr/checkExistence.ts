/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("should not throw an error if the key exists", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            color: {}
        }
    });

    // Act
    const test: Function = (): void => ItemsHolder.checkExistence("color");

    // Assert
    chai.expect(test).not.to.throw();
});

mochaLoader.it("should throw an error if the key does not exist", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({ allowNewItems: false });

    // Act
    const test: Function = (): void => ItemsHolder.checkExistence("color");

    // Assert
    chai.expect(test).to.throw("Unknown key given to ItemsHoldr: 'color'.");
});
