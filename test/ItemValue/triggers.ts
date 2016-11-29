import { IItemValue } from "../../src/IItemValue";
import { fakes } from "../utils/fakes";
import { mochaLoader } from "../main";

mochaLoader.it("calls the respective trigger function", (): void => {
    // Arrange
    let flagged: boolean = false;
    const item: IItemValue = fakes.stubItemValue(fakes.stubItemsHoldr(), "color", {
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
