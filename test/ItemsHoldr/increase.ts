/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemsHoldr } from "../../src/IItemsHoldr";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("adds to a Number type value", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            weight: {
                valueDefault: 100
            }
        }
    });

    // Act
    ItemsHolder.increase("weight", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("weight")).to.equal(103);
});

mochaLoader.it("concatenates to a String type value", (): void => {
    // Arrange
    const ItemsHolder: IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            color: {
                valueDefault: "red"
            }
        }
    });

    // Act
    ItemsHolder.increase("color", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("color")).to.equal("red3");
});
