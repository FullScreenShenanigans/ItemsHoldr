/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("switches from true to false", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            alive: {
                valueDefault: true
            }
        }
    });

    // Act
    ItemsHolder.toggle("alive");

    // Assert
    chai.expect(ItemsHolder.getItem("alive")).to.equal(false);
});

mochaLoader.it("switches from false to true", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            alive: {
                valueDefault: false
            }
        }
    });

    // Act
    ItemsHolder.toggle("alive");

    // Assert
    chai.expect(ItemsHolder.getItem("alive")).to.equal(true);
});
