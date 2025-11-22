import 'whatwg-fetch';
import type {
  Province,
  District,
  Ward,
  ApiResponse,
  ApiError,
  AddressKitConfig,
} from './types';

/**
 * Helper function to unwrap API response
 */
function unwrapResponse<T>(response: T | ApiResponse<T>): T {
  if (response && typeof response === 'object' && 'data' in response) {
    return (response as ApiResponse<T>).data;
  }
  return response as T;
}

/**
 * AddressKit API Client for Vietnamese administrative divisions
 */
export class AddressKitClient {
  private baseUrl: string;
  private timeout: number;
  private headers: Record<string, string>;

  constructor(config: AddressKitConfig = {}) {
    this.baseUrl = config.baseUrl || 'https://addresskit.cas.so';
    this.timeout = config.timeout || 10000;
    this.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
  }

  /**
   * Make a GET request to the API
   */
  private async request<T>(endpoint: string): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: this.headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error: ApiError = {
          message: `HTTP error! status: ${response.status}`,
          status: response.status,
        };
        throw error;
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw {
            message: 'Request timeout',
            code: 'TIMEOUT',
          } as ApiError;
        }
        throw {
          message: error.message,
          code: 'FETCH_ERROR',
        } as ApiError;
      }
      throw error;
    }
  }

  /**
   * Get all provinces in Vietnam
   */
  async getProvinces(): Promise<Province[]> {
    const response = await this.request<Province[] | ApiResponse<Province[]>>(
      '/api/provinces'
    );
    
    // Handle both direct array and wrapped response
    if (Array.isArray(response)) {
      return response;
    }
    return unwrapResponse(response) || [];
  }

  /**
   * Get a specific province by code
   */
  async getProvince(provinceCode: string): Promise<Province | null> {
    try {
      const response = await this.request<Province | ApiResponse<Province>>(
        `/api/provinces/${provinceCode}`
      );
      
      return unwrapResponse(response);
    } catch (error) {
      return null;
    }
  }

  /**
   * Get all districts in a province
   */
  async getDistricts(provinceCode: string): Promise<District[]> {
    const response = await this.request<District[] | ApiResponse<District[]>>(
      `/api/provinces/${provinceCode}/districts`
    );
    
    if (Array.isArray(response)) {
      return response;
    }
    return unwrapResponse(response) || [];
  }

  /**
   * Get a specific district by code
   */
  async getDistrict(
    provinceCode: string,
    districtCode: string
  ): Promise<District | null> {
    try {
      const response = await this.request<District | ApiResponse<District>>(
        `/api/provinces/${provinceCode}/districts/${districtCode}`
      );
      
      return unwrapResponse(response);
    } catch (error) {
      return null;
    }
  }

  /**
   * Get all wards in a district
   */
  async getWards(
    provinceCode: string,
    districtCode: string
  ): Promise<Ward[]> {
    const response = await this.request<Ward[] | ApiResponse<Ward[]>>(
      `/api/provinces/${provinceCode}/districts/${districtCode}/wards`
    );
    
    if (Array.isArray(response)) {
      return response;
    }
    return unwrapResponse(response) || [];
  }

  /**
   * Get a specific ward by code
   */
  async getWard(
    provinceCode: string,
    districtCode: string,
    wardCode: string
  ): Promise<Ward | null> {
    try {
      const response = await this.request<Ward | ApiResponse<Ward>>(
        `/api/provinces/${provinceCode}/districts/${districtCode}/wards/${wardCode}`
      );
      
      return unwrapResponse(response);
    } catch (error) {
      return null;
    }
  }

  /**
   * Search for provinces by name
   */
  async searchProvinces(query: string): Promise<Province[]> {
    const provinces = await this.getProvinces();
    const lowerQuery = query.toLowerCase();
    return provinces.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.nameEn?.toLowerCase().includes(lowerQuery) ||
        p.codeName?.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Search for districts by name in a province
   */
  async searchDistricts(
    provinceCode: string,
    query: string
  ): Promise<District[]> {
    const districts = await this.getDistricts(provinceCode);
    const lowerQuery = query.toLowerCase();
    return districts.filter(
      (d) =>
        d.name.toLowerCase().includes(lowerQuery) ||
        d.nameEn?.toLowerCase().includes(lowerQuery) ||
        d.codeName?.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Search for wards by name in a district
   */
  async searchWards(
    provinceCode: string,
    districtCode: string,
    query: string
  ): Promise<Ward[]> {
    const wards = await this.getWards(provinceCode, districtCode);
    const lowerQuery = query.toLowerCase();
    return wards.filter(
      (w) =>
        w.name.toLowerCase().includes(lowerQuery) ||
        w.nameEn?.toLowerCase().includes(lowerQuery) ||
        w.codeName?.toLowerCase().includes(lowerQuery)
    );
  }
}

/**
 * Create a new AddressKit client instance
 */
export function createClient(config?: AddressKitConfig): AddressKitClient {
  return new AddressKitClient(config);
}
