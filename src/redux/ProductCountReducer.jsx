import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    total:0.00,
    cart: []
};

export const ProductCountSlice = createSlice({
    name: "productcount",
    initialState,
    reducers: {
        addCount: function (state, action) {
            state.count = action.payload;
        },
        subCount: function (state, action) {
            // This can be used if you need to handle subtraction of count directly.
        },
        productCartDataManage: function (state, action) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (state.cart.length !== 0) {
                const itemInCart = state.cart.find((item) => item._id === action.payload._id);
                if (itemInCart) {
                    state.cart = state.cart.map((item, i) => {
                        if (item._id === action.payload._id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        } else {
                            return item;
                        }
                    });
                    console.log('cartItemmatchid', state.cart);
                } else {
                    state.cart.push({ ...action.payload, quantity: 1 });
                    console.log('cartItem', state.cart);
                }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                console.log('cartData', state.cart);
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.count = state.cart.reduce((acc, item) => acc + item.quantity, 0);
            state.total = state.cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2);

        },
        productCartDataDecrease: function (state, action) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (state.cart.length !== 0) {
                const itemInCart = state.cart.find((item) => item._id === action.payload._id);
                if (itemInCart && itemInCart.quantity > 1) {
                    state.cart = state.cart.map((item, i) => {
                        if (item._id === action.payload._id) {
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        } else {
                            return item;
                        }
                    });
                } else {
                    state.cart = state.cart.filter((item) => item._id !== action.payload._id);
                }
                console.log('cartItemmatchid', state.cart);
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.count = state.cart.reduce((acc, item) => acc + item.quantity, 0);
            state.total = state.cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2);

        }
    }
});

export const { addCount, subCount, productCartDataManage, productCartDataDecrease } = ProductCountSlice.actions;

export default ProductCountSlice.reducer;
