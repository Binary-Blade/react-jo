export const getStoredCartId = () => {
    const item = localStorage.getItem('cartId');
    const expiry = localStorage.getItem('cartIdExpiry');
    const now = new Date();

    if (!item || !expiry) {
        return null;
    }
    if (now.getTime() > parseInt(expiry)) {
        localStorage.removeItem('cartId');
        localStorage.removeItem('cartIdExpiry');
        return null;
    }
    return parseInt(item);
}

export const setStoredCartId = (cartId: number) => {
    const now = new Date();
    const expiry = now.getTime() + 6 * 60 * 60 * 1000; // 6 hours
    localStorage.setItem('cartId', String(cartId));
    localStorage.setItem('cartIdExpiry', String(expiry));
}
