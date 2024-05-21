import { describe, it, expect, vi } from 'vitest';
import { cn, debounce, filterProperties } from '@/lib/utils';

// Helper function to compare class lists regardless of order
const classNames = (input: string) => input.split(' ').sort().join(' ');

describe('cn function', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(classNames(result)).toBe(classNames('class1 class2'));
  });

  it('should handle conditional class names', () => {
    const result = cn('class1', false && 'class2', 'class3');
    expect(classNames(result)).toBe(classNames('class1 class3'));
  });

  it('should merge Tailwind class names correctly', () => {
    const result = cn('bg-red-500', 'text-white', 'bg-red-700');
    expect(classNames(result)).toBe(classNames('bg-red-700 text-white'));
  });
});

// Test for `debounce` function
describe('debounce function', () => {
  it('should debounce a function', async () => {
    const mockFunction = vi.fn().mockResolvedValue(undefined);
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    expect(mockFunction).not.toHaveBeenCalled();

    await new Promise(r => setTimeout(r, 150));

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});

// Test for `filterProperties` function
describe('filterProperties function', () => {
  it('should filter object properties correctly', () => {
    const obj = {
      name: 'John',
      age: 30,
      location: 'New York'
    };
    const result = filterProperties(obj, ['name', 'location']);
    expect(result).toEqual({
      name: 'John',
      location: 'New York'
    });
  });

  it('should return an empty object if no properties are allowed', () => {
    const obj = {
      name: 'John',
      age: 30,
      location: 'New York'
    };
    const result = filterProperties(obj, []);
    expect(result).toEqual({});
  });

  it('should handle non-existing properties gracefully', () => {
    const obj = {
      name: 'John',
      age: 30
    };
    const result = filterProperties(obj, ['name', 'name']);
    expect(result).toEqual({
      name: 'John'
    });
  });
});
