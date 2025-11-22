/**
 * vn-addresskit - Type-safe TypeScript wrapper for AddressKit Vietnam API
 * 
 * This library provides a convenient way to access Vietnamese administrative
 * divisions (provinces, districts, wards) through the AddressKit API.
 */

export { AddressKitClient, createClient } from './client';
export type {
  Province,
  District,
  Ward,
  ApiResponse,
  ApiError,
  AddressKitConfig,
} from './types';

// Default export for convenience
export { createClient as default } from './client';
