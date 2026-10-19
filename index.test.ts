import { describe, expect, test } from 'bun:test';
import {
  COUNTRY_DIAL_CODES,
  DEFAULT_COUNTRY_CODE,
  DEFAULT_DIAL_CODE,
  normalizePhone,
  normalizePhoneID,
  parsePhoneNumber,
} from './index';

describe('COUNTRY_DIAL_CODES', () => {
  test('has Indonesia as default and contains valid structure', () => {
    expect(DEFAULT_COUNTRY_CODE).toBe('ID');
    expect(DEFAULT_DIAL_CODE).toBe('+62');
    const id = COUNTRY_DIAL_CODES.find((c) => c.code === 'ID');
    expect(id).toBeDefined();
    expect(id?.dialCode).toBe('+62');
    expect(id?.flag).toBe('🇮🇩');

    for (const c of COUNTRY_DIAL_CODES) {
      expect(c.code).toBeTruthy();
      expect(c.dialCode.startsWith('+')).toBe(true);
      expect(c.flag).toBeTruthy();
      expect(c.name).toBeTruthy();
      expect(c.nameId).toBeTruthy();
      expect(c.nameZh).toBeTruthy();
    }
  });
});

describe('normalizePhone', () => {
  test('normalizes Indonesian domestic formats', () => {
    expect(normalizePhone('08123456789', '+62')).toBe('+628123456789');
    expect(normalizePhone('8123456789', '+62')).toBe('+628123456789');
    expect(normalizePhone('628123456789', '+62')).toBe('+628123456789');
    expect(normalizePhone('+628123456789', '+62')).toBe('+628123456789');
    expect(normalizePhoneID('08123456789')).toBe('+628123456789');
  });

  test('normalizes international formats with selected dial code', () => {
    // Singapore (+65)
    expect(normalizePhone('91234567', '+65')).toBe('+6591234567');
    // Malaysia (+60)
    expect(normalizePhone('123456789', '+60')).toBe('+60123456789');
    // Australia (+61) with leading 0 stripped
    expect(normalizePhone('0412345678', '+61')).toBe('+61412345678');
    // United States (+1)
    expect(normalizePhone('4155552671', '+1')).toBe('+14155552671');
    // China (+86)
    expect(normalizePhone('13800138000', '+86')).toBe('+8613800138000');
  });

  test('handles full numbers starting with +', () => {
    expect(normalizePhone('+65 9123 4567')).toBe('+6591234567');
    expect(normalizePhone('+60 12-345-6789')).toBe('+60123456789');
    expect(normalizePhone('+81 90 1234 5678')).toBe('+819012345678');
  });

  test('rejects invalid numbers', () => {
    expect(normalizePhone('')).toBeNull();
    expect(normalizePhone('   ')).toBeNull();
    expect(normalizePhone('abc')).toBeNull();
    expect(normalizePhone('123')).toBeNull(); // too short (<7 digits)
    expect(normalizePhone('01234567890123456789', '+62')).toBeNull(); // too long (>15 digits)
    expect(normalizePhone('0712345678', '+62')).toBeNull(); // Indonesian numbers must start with 8
  });
});

describe('parsePhoneNumber', () => {
  test('parses existing phone numbers into country and national number', () => {
    const idResult = parsePhoneNumber('+6281234567890');
    expect(idResult.country.code).toBe('ID');
    expect(idResult.country.dialCode).toBe('+62');
    expect(idResult.nationalNumber).toBe('81234567890');

    const sgResult = parsePhoneNumber('+6581234567');
    expect(sgResult.country.code).toBe('SG');
    expect(sgResult.country.dialCode).toBe('+65');
    expect(sgResult.nationalNumber).toBe('81234567');

    const cnResult = parsePhoneNumber('+8613800138000');
    expect(cnResult.country.code).toBe('CN');
    expect(cnResult.nationalNumber).toBe('13800138000');
  });

  test('parses legacy local formats without +', () => {
    const local08 = parsePhoneNumber('081234567890');
    expect(local08.country.code).toBe('ID');
    expect(local08.nationalNumber).toBe('81234567890');

    const local62 = parsePhoneNumber('6281234567890');
    expect(local62.country.code).toBe('ID');
    expect(local62.nationalNumber).toBe('81234567890');
  });

  test('handles empty or missing input safely', () => {
    const empty = parsePhoneNumber('');
    expect(empty.country.code).toBe('ID');
    expect(empty.nationalNumber).toBe('');

    const nil = parsePhoneNumber(null);
    expect(nil.country.code).toBe('ID');
    expect(nil.nationalNumber).toBe('');
  });
});
