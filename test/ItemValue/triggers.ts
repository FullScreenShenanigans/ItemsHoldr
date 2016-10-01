/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />

import { IItemValue } from "../../src/IItemValue";
import { mochaLoader } from "../main";
import { mocks } from "../utils/mocks";

mochaLoader.it("calls the respective trigger function", (): void => {
    // Arrange
    let flagged: boolean = false;
    const item: IItemValue = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
        valueDefault: "red",
        triggers: {
            blue: (): void => {
                flagged = true;
            }
        }
    });

    // Act
    item.setValue("blue");

    // Assert
    chai.expect(flagged).to.be.true;
});

mochaLoader.it("doesn't call irrelevent trigger functions", (): void => {
    // Arrange
    let flagged: boolean = false;
    const item: IItemValue = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
        valueDefault: "red",
        triggers: {
            blue: (): void => {
                flagged = true;
            }
        }
    });

    // Act
    item.setValue("green");

    // Assert
    chai.expect(flagged).to.be.false;
});
