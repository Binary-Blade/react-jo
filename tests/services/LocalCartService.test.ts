import { CreateCartItemLocalDto } from '@/config/dtos/LocalCartItem.dto';
import { LocalCartService } from '@/services/LocalCartService';
import { describe, it, expect, beforeEach } from 'vitest';

describe('LocalCartService', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
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
    LocalCartService.clearStoredCartAll();

    expect(localStorage.getItem('cartItems')).toBeNull();
    expect(localStorage.getItem('cartId')).toBeNull();
    expect(localStorage.getItem('cartIdExpiry')).toBeNull();
  });
});
