"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Create Order
const createOrder = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    return yield prisma_1.default.order.create({
        data: {
            userId: user === null || user === void 0 ? void 0 : user.userId,
            orderedBooks: payload,
        },
    });
});
// Get all orders
const getAllOrders = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { role, userId } = user;
    const whereConditions = role === 'admin' ? {} : { userId };
    return yield prisma_1.default.order.findMany({
        where: whereConditions,
    });
});
// Get single order
const getSingleOrder = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { role, userId } = user;
    const order = yield prisma_1.default.order.findUnique({
        where: {
            id,
        },
    });
    // Throw an error if not matched with orders userId
    if (role === 'customer' && userId !== (order === null || order === void 0 ? void 0 : order.userId)) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized to fetch this order.');
    }
    else {
        return order;
    }
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
};
