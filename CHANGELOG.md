# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2025-11-22

### Added
- Initial release of vn-addresskit
- AddressKit API client with type-safe TypeScript interfaces
- Support for Vietnamese provinces, districts, and wards
- Methods to fetch all entities and specific entities by code
- Search functionality for provinces, districts, and wards
- Configuration options for base URL, timeout, and custom headers
- Support for both ESM and CommonJS module formats
- Built with tsdown for optimal bundle size
- Uses whatwg-fetch for reliable HTTP requests
- Comprehensive documentation in README.md
- JSR configuration for publishing to JSR registry
- npm configuration for publishing to npm registry

### Features
- `getProvinces()`: Get all provinces in Vietnam
- `getProvince(code)`: Get a specific province by code
- `getDistricts(provinceCode)`: Get all districts in a province
- `getDistrict(provinceCode, districtCode)`: Get a specific district
- `getWards(provinceCode, districtCode)`: Get all wards in a district
- `getWard(provinceCode, districtCode, wardCode)`: Get a specific ward
- `searchProvinces(query)`: Search provinces by name
- `searchDistricts(provinceCode, query)`: Search districts by name
- `searchWards(provinceCode, districtCode, query)`: Search wards by name

[Unreleased]: https://github.com/TaQuangKhoi/vn-addresskit/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/TaQuangKhoi/vn-addresskit/releases/tag/v0.1.0
