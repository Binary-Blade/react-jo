export class StoreLocalStorage {
    static getStoredCartId() {
        try {
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
        } catch (error) {
            console.error("Failed to retrieve 'cartId' from localStorage:", error);
            return null;
        }
    }

    static setStoredCartId(cartId: number) {
        try {
            const now = new Date();
            const expiry = now.getTime() + 6 * 60 * 60 * 1000; // 6 hours
            localStorage.setItem('cartId', String(cartId));
            localStorage.setItem('cartIdExpiry', String(expiry));
        } catch (error) {
            console.error("Failed to set 'cartId' in localStorage:", error);
        }
    }
}
