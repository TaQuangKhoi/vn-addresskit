/**
 * Vietnamese Province
 */
export interface Province {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  administrativeUnitId?: number;
  administrativeRegionId?: number;
}

/**
 * Vietnamese District
 */
export interface District {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  provinceCode: string;
  administrativeUnitId?: number;
}

/**
 * Vietnamese Ward/Commune
 */
export interface Ward {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  districtCode: string;
  administrativeUnitId?: number;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

/**
 * API Error
 */
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * Address Kit Client Configuration
 */
export interface AddressKitConfig {
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
}
