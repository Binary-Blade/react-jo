import { CreateCartItemLocalDto } from '@/config/dtos/LocalCartItem.dto';
import { LocalCartService } from './LocalCartService';
import { describe, it, expect, beforeEach } from 'vitest';

interface MockLocalStorage {
  [key: string]: string | null;
}

const localStorageMock = (function () {
  let store: MockLocalStorage = {};
  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: string): void {
      store[key] = value;
    },
    removeItem(key: string): void {
      delete store[key];
    },
    clear(): void {
      store = {};
    },
    key(index: number): string | null {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
    get length(): number {
      return Object.keys(store).length;
    }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
  writable: true
});

describe('LocalCartService', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should handle exceptions during localStorage operations', () => {
    const badData = {
      get me() {
        throw new Error('Failed to access data');
      }
    };
    localStorage.setItem('badData', JSON.stringify(badData)); // Simulate an error during serialization

    expect(() => LocalCartService.getStoredCartItems()).toThrow('Failed to access data');
  });
  it('should retrieve a valid stored cart ID', () => {
    const now = new Date();
    const expiry = now.getTime() + 6 * 60 * 60 * 1000;
    localStorage.setItem('cartId', '123');
    localStorage.setItem('cartIdExpiry', String(expiry));

    const cartId = LocalCartService.getStoredCartId();
    expect(cartId).toBe(123);
  });

  it('should return null if cart ID is expired', () => {
    const now = new Date();
    const pastExpiry = now.getTime() - 1000;
    localStorage.setItem('cartId', '123');
    localStorage.setItem('cartIdExpiry', String(pastExpiry));

    const cartId = LocalCartService.getStoredCartId();
    expect(cartId).toBeNull();
    expect(localStorage.getItem('cartId')).toBeNull();
    expect(localStorage.getItem('cartIdExpiry')).toBeNull();
  });

  it('should store a cart ID with an expiry', () => {
    LocalCartService.setStoredCartId(123);
    expect(localStorage.getItem('cartId')).toBe('123');
    expect(localStorage.getItem('cartIdExpiry')).not.toBeNull();
  });

  it('should retrieve stored cart items', () => {
    const cartItems: CreateCartItemLocalDto[] = [
      {
        quantity: 2,
        priceFormula: 'fixed',
        eventId: 10,
        price: 100
      }
    ];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const storedItems = LocalCartService.getStoredCartItems();
    expect(storedItems).toEqual(cartItems);
  });

  it('should return an empty array if no cart items are stored', () => {
    const storedItems = LocalCartService.getStoredCartItems();
    expect(storedItems).toEqual([]);
  });

  it('should store cart items', () => {
    const cartItems: CreateCartItemLocalDto[] = [
      {
        quantity: 2,
        priceFormula: 'fixed',
        eventId: 10,
        price: 100
      }
    ];
    LocalCartService.setStoredCartItems(cartItems);
    expect(localStorage.getItem('cartItems')).toEqual(JSON.stringify(cartItems));
  });

  it('should clear all stored cart items and IDs', () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        { id: 1, name: 'Product 1', quantity: 2, priceFormula: 'fixed', eventId: 10, price: 100 }
      ])
    );
    localStorage.setItem('cartId', '123');
    localStorage.setItem('cartIdExpiry', '9999999999999');
    LocalCartService.clearStoredCartItems();

    expect(localStorage.getItem('cartItems')).toBeNull();
    expect(localStorage.getItem('cartId')).toBeNull();
    expect(localStorage.getItem('cartIdExpiry')).toBeNull();
  });
});
