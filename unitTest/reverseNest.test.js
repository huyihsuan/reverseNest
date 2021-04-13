const reverseNest = require('../src/reverseNest');

test('範例input，預期輸出範例中output', () => {
    const inputValue = {
        hired: {
            be: {
                to: {
                    deserve: 'I'
                }
            }
        }
    };
    const outputValue = {
        I: {
            deserve: {
                to: {
                    be: 'hired'
                }
            }
        }
    };

    expect(reverseNest(inputValue)).toMatchObject(outputValue);
    expect(reverseNest({ hired: 'I' })).toMatchObject({ I: 'hired' });
});

test("異常輸入測試", () => {
    expect(() => reverseNest({ deserve: null })).toThrow("invalid input");
    expect(() => reverseNest(null)).toThrow("invalid input");
    expect(() => reverseNest({ hired: 'I', test: 'invalid' })).toThrow("invalid input");
    expect(() => reverseNest({ deserve: {} })).toThrow("invalid input");
});