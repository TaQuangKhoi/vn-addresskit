/**
 * Example usage of vn-addresskit
 * 
 * This file demonstrates how to use the library in a Node.js environment.
 * Note: This requires the build output to be available in the dist directory.
 */

// Import the library (after building)
// const { createClient } = require('./dist/index.js');

// Or using ES modules:
// import { createClient } from './dist/index.mjs';

/**
 * Example 1: Basic usage - Get all provinces
 */
async function example1() {
  const { createClient } = require('./dist/index.js');
  const client = createClient();
  
  console.log('Example 1: Getting all provinces');
  try {
    const provinces = await client.getProvinces();
    console.log(`Found ${provinces.length} provinces`);
    console.log('First 3 provinces:', provinces.slice(0, 3));
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Example 2: Get a specific province
 */
async function example2() {
  const { createClient } = require('./dist/index.js');
  const client = createClient();
  
  console.log('Example 2: Getting Hanoi province (code: 01)');
  try {
    const province = await client.getProvince('01');
    console.log('Province:', province);
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Example 3: Get districts in a province
 */
async function example3() {
  const { createClient } = require('./dist/index.js');
  const client = createClient();
  
  console.log('Example 3: Getting districts in Hanoi (code: 01)');
  try {
    const districts = await client.getDistricts('01');
    console.log(`Found ${districts.length} districts`);
    console.log('First 3 districts:', districts.slice(0, 3));
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Example 4: Get wards in a district
 */
async function example4() {
  const { createClient } = require('./dist/index.js');
  const client = createClient();
  
  console.log('Example 4: Getting wards in a district');
  try {
    const wards = await client.getWards('01', '001');
    console.log(`Found ${wards.length} wards`);
    console.log('First 3 wards:', wards.slice(0, 3));
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Example 5: Search for provinces
 */
async function example5() {
  const { createClient } = require('./dist/index.js');
  const client = createClient();
  
  console.log('Example 5: Searching for provinces with "Hà"');
  try {
    const results = await client.searchProvinces('Hà');
    console.log(`Found ${results.length} matching provinces`);
    console.log('Results:', results.map(p => p.name));
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Example 6: Custom configuration
 */
async function example6() {
  const { AddressKitClient } = require('./dist/index.js');
  
  console.log('Example 6: Using custom configuration');
  const client = new AddressKitClient({
    baseUrl: 'https://addresskit.cas.so',
    timeout: 15000,
    headers: {
      'User-Agent': 'vn-addresskit-example',
    },
  });
  
  try {
    const provinces = await client.getProvinces();
    console.log(`Successfully fetched ${provinces.length} provinces with custom config`);
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('');
}

/**
 * Run all examples
 */
async function runExamples() {
  console.log('=== VN-AddressKit Examples ===\n');
  
  await example1();
  await example2();
  await example3();
  await example4();
  await example5();
  await example6();
  
  console.log('=== All examples completed ===');
}

// Only run if executed directly
if (require.main === module) {
  runExamples().catch(console.error);
}

module.exports = {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  runExamples,
};
