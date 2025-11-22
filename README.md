# vn-addresskit

Type-safe TypeScript wrapper for AddressKit Vietnam API. This library provides a convenient way to access Vietnamese administrative divisions (provinces, districts, wards) through the [AddressKit API](https://addresskit.cas.so).

## Features

- 🚀 Type-safe API with full TypeScript support
- 📦 Works in both Node.js and browser environments
- 🔄 Support for ESM and CommonJS
- 🎯 Built with `whatwg-fetch` for reliable HTTP requests
- ⚡ Compiled with `tsdown` for optimal bundle size
- 📝 Complete Vietnamese address data (provinces, districts, wards)

## Installation

### npm

```bash
npm install vn-addresskit
```

### pnpm

```bash
pnpm add vn-addresskit
```

### yarn

```bash
yarn add vn-addresskit
```

### JSR

```bash
npx jsr add @taquangkhoi/vn-addresskit
```

## Usage

### Basic Example

```typescript
import { createClient } from 'vn-addresskit';

// Create a client instance
const client = createClient();

// Get all provinces
const provinces = await client.getProvinces();
console.log(provinces);

// Get a specific province
const hanoi = await client.getProvince('01');
console.log(hanoi);

// Get districts in a province
const districts = await client.getDistricts('01');
console.log(districts);

// Get wards in a district
const wards = await client.getWards('01', '001');
console.log(wards);
```

### Advanced Usage

```typescript
import { AddressKitClient } from 'vn-addresskit';

// Create a client with custom configuration
const client = new AddressKitClient({
  baseUrl: 'https://addresskit.cas.so',
  timeout: 15000, // 15 seconds
  headers: {
    'Custom-Header': 'value',
  },
});

// Search for provinces
const results = await client.searchProvinces('Hà Nội');
console.log(results);

// Search for districts
const districts = await client.searchDistricts('01', 'Hoàn Kiếm');
console.log(districts);

// Search for wards
const wards = await client.searchWards('01', '001', 'Phúc Tân');
console.log(wards);
```

## API Reference

### `createClient(config?: AddressKitConfig): AddressKitClient`

Creates a new AddressKit client instance.

**Parameters:**
- `config` (optional): Configuration object
  - `baseUrl` (string): Base URL of the API (default: `'https://addresskit.cas.so'`)
  - `timeout` (number): Request timeout in milliseconds (default: `10000`)
  - `headers` (object): Additional headers to send with requests

**Returns:** `AddressKitClient` instance

### AddressKitClient Methods

#### `getProvinces(): Promise<Province[]>`

Get all provinces in Vietnam.

#### `getProvince(provinceCode: string): Promise<Province | null>`

Get a specific province by code.

#### `getDistricts(provinceCode: string): Promise<District[]>`

Get all districts in a province.

#### `getDistrict(provinceCode: string, districtCode: string): Promise<District | null>`

Get a specific district by code.

#### `getWards(provinceCode: string, districtCode: string): Promise<Ward[]>`

Get all wards in a district.

#### `getWard(provinceCode: string, districtCode: string, wardCode: string): Promise<Ward | null>`

Get a specific ward by code.

#### `searchProvinces(query: string): Promise<Province[]>`

Search for provinces by name.

#### `searchDistricts(provinceCode: string, query: string): Promise<District[]>`

Search for districts by name in a province.

#### `searchWards(provinceCode: string, districtCode: string, query: string): Promise<Ward[]>`

Search for wards by name in a district.

## Types

### Province

```typescript
interface Province {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  administrativeUnitId?: number;
  administrativeRegionId?: number;
}
```

### District

```typescript
interface District {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  provinceCode: string;
  administrativeUnitId?: number;
}
```

### Ward

```typescript
interface Ward {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  districtCode: string;
  administrativeUnitId?: number;
}
```

## Publishing

### Publishing to npm

```bash
# Build the project
pnpm run build

# Login to npm (if not already logged in)
npm login

# Publish
npm publish
```

### Publishing to JSR

```bash
# Install JSR CLI if not already installed
npm install -g @jsr/cli

# Login to JSR (if not already logged in)
jsr login

# Publish
jsr publish
```

## Development

### Build

```bash
pnpm run build
```

### Project Structure

```
vn-addresskit/
├── src/
│   ├── index.ts       # Main entry point
│   ├── client.ts      # AddressKit client implementation
│   └── types.ts       # TypeScript type definitions
├── dist/              # Build output (generated)
├── tsconfig.json      # TypeScript configuration
├── tsdown.config.ts   # tsdown build configuration
├── jsr.json          # JSR configuration
└── package.json      # Package configuration
```

## Technologies Used

- **TypeScript**: Type-safe JavaScript
- **whatwg-fetch**: Fetch API polyfill for reliable HTTP requests
- **tsdown**: Fast TypeScript bundler

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Data Source

This library uses the [AddressKit API](https://addresskit.cas.so) as its data source for Vietnamese administrative divisions.
