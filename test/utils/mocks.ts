import { IItemsHoldr, IItemsHoldrSettings } from "../../src/IItemsHoldr";
import { IItemValue } from "../../src/IItemValue";
import { ItemsHoldr } from "../../src/ItemsHoldr";
import { ItemValue } from "../../src/ItemValue";

export const mocks = {
    /**
     * @param ItemsHolder   ItemsHolder object.
     * @param key   Key for the item.
     * @param settings   Settings for the ItemValue.
     * @returns An ItemValue instance.
     */
    mockItemValue: (ItemsHolder?: IItemsHoldr, key?: string, settings?: any): IItemValue => {
        return new ItemValue(ItemsHolder, key, settings);
    },

    /**
     * @param settings   Settings for the ItemsHoldr.
     * @returns An ItemsHoldr instance.
     */
    mockItemsHoldr: (settings?: IItemsHoldrSettings): IItemsHoldr => {
        return new ItemsHoldr(settings);
    },

    /**
     * @returns An object with a valueDefault property for ItemValue object instantiation.
     */
    mockItemValueSettings: (): any => {
        return {
            valueDefault: "red"
        };
    }
};
