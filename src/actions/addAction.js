export const ADD = 'ADD';

export function addAction(input) {
    return {
        type: ADD,
        payload: input
    }
}