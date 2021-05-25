import AddNewCurrencyViewModel from "../AddNewCurrencyViewModel"
import RootStore from "../../../models/RootStore";

describe("AddNewCurrencyViewModel", () => {
    let viewModel: AddNewCurrencyViewModel;
    const testCurrencies = { "ABC": "ABC", "DEF": "DEF" };
    let rootStore;
    beforeAll(() => {
        rootStore = {
            [RootStore.type.CURRENCIES]: {
                getCurrencies: jest.fn()
            },
            [RootStore.type.CURRENCY_CONVERSIONS]: {
                addConversion: jest.fn()

            }
        };
        viewModel = new AddNewCurrencyViewModel(rootStore);
    });

    test("should call addConversion from rootStore", () => {
        const testInput = { test: "test123" };
        viewModel.addNewConversion(testInput);
        expect(rootStore[RootStore.type.CURRENCY_CONVERSIONS].addConversion).toHaveBeenCalledWith(testInput);
    });

    test("should call getCurrencies and return the value as is from the store", () => {
        rootStore[RootStore.type.CURRENCIES].getCurrencies.mockReturnValue(testCurrencies);
        const actualCurrencies = viewModel.getCurrencies();
        expect(rootStore[RootStore.type.CURRENCIES].getCurrencies).toHaveBeenCalledWith();
        expect(actualCurrencies).toEqual(testCurrencies);
    });
});