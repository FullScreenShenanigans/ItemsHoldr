/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("subtracts from a Number type value", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            weight: {
                valueDefault: 100
            }
        }
    });

    // Act
    ItemsHolder.decrease("weight", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("weight")).to.equal(97);
});
