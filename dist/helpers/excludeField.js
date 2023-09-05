"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
function exclude(users, keys) {
    if (users === null)
        return null;
    if (Array.isArray(users)) {
        return users.map(user => {
            return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
        });
    }
    else {
        return [
            Object.fromEntries(Object.entries(users).filter(([key]) => !keys.includes(key))),
        ];
    }
}
exports.exclude = exclude;
