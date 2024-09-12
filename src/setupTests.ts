// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

let consoleSpy: jest.SpyInstance;
beforeAll(() => {
    consoleSpy = jest.spyOn(global.console, 'error').mockImplementation((message) => {
        if (!message?.message?.includes('Could not parse CSS stylesheet')) {
            global.console.warn(message);
        }
    })
});
 
afterAll(() => consoleSpy.mockRestore());