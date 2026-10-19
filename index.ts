export type LedgerKind = 'EARNED' | 'REDEEMED' | 'EXPIRED' | 'ADJUSTMENT' | 'PACKAGE_PURCHASE' | 'VOUCHER_REDEMPTION' | 'TRANSACTION';

export type Gender = 'male' | 'female';
export const GENDERS: Gender[] = ['male', 'female'];
export const GENDER_LABEL: Record<Gender, string> = {
  male: 'Male',
  female: 'Female',
};
export const ID_PHONE_HINT = 'Nomor telepon harus diawali dengan 08 atau +62 dan terdiri dari 10-14 digit.';

export interface CountryDialCode {
  name: string;
  nameId: string;
  nameZh: string;
  dialCode: string; // e.g. "+62"
  code: string;     // ISO 2-letter, e.g. "ID"
  flag: string;     // emoji flag, e.g. "🇮🇩"
}

export const DEFAULT_COUNTRY_CODE = 'ID';
export const DEFAULT_DIAL_CODE = '+62';

export const COUNTRY_DIAL_CODES: CountryDialCode[] = [
  { code: 'ID', dialCode: '+62', flag: '🇮🇩', name: 'Indonesia', nameId: 'Indonesia', nameZh: '印度尼西亚' },
  { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore', nameId: 'Singapura', nameZh: '新加坡' },
  { code: 'MY', dialCode: '+60', flag: '🇲🇾', name: 'Malaysia', nameId: 'Malaysia', nameZh: '马来西亚' },
  { code: 'CN', dialCode: '+86', flag: '🇨🇳', name: 'China', nameId: 'Tiongkok', nameZh: '中国' },
  { code: 'HK', dialCode: '+852', flag: '🇭🇰', name: 'Hong Kong', nameId: 'Hong Kong', nameZh: '中国香港' },
  { code: 'TW', dialCode: '+886', flag: '🇹🇼', name: 'Taiwan', nameId: 'Taiwan', nameZh: '中国台湾' },
  { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia', nameId: 'Australia', nameZh: '澳大利亚' },
  { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States', nameId: 'Amerika Serikat', nameZh: '美国' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom', nameId: 'Inggris', nameZh: '英国' },
  { code: 'JP', dialCode: '+81', flag: '🇯🇵', name: 'Japan', nameId: 'Jepang', nameZh: '日本' },
  { code: 'KR', dialCode: '+82', flag: '🇰🇷', name: 'South Korea', nameId: 'Korea Selatan', nameZh: '韩国' },
  { code: 'TH', dialCode: '+66', flag: '🇹🇭', name: 'Thailand', nameId: 'Thailand', nameZh: '泰国' },
  { code: 'VN', dialCode: '+84', flag: '🇻🇳', name: 'Vietnam', nameId: 'Vietnam', nameZh: '越南' },
  { code: 'PH', dialCode: '+63', flag: '🇵🇭', name: 'Philippines', nameId: 'Filipina', nameZh: '菲律宾' },
  { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India', nameId: 'India', nameZh: '印度' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany', nameId: 'Jerman', nameZh: '德国' },
  { code: 'FR', dialCode: '+33', flag: '🇫🇷', name: 'France', nameId: 'Prancis', nameZh: '法国' },
  { code: 'NL', dialCode: '+31', flag: '🇳🇱', name: 'Netherlands', nameId: 'Belanda', nameZh: '荷兰' },
  { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada', nameId: 'Kanada', nameZh: '加拿大' },
  { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates', nameId: 'Uni Emirat Arab', nameZh: '阿联酋' },
  { code: 'SA', dialCode: '+966', flag: '🇸🇦', name: 'Saudi Arabia', nameId: 'Arab Saudi', nameZh: '沙特阿拉伯' },
  { code: 'NZ', dialCode: '+64', flag: '🇳🇿', name: 'New Zealand', nameId: 'Selandia Baru', nameZh: '新西兰' },
  { code: 'IT', dialCode: '+39', flag: '🇮🇹', name: 'Italy', nameId: 'Italia', nameZh: '意大利' },
  { code: 'ES', dialCode: '+34', flag: '🇪🇸', name: 'Spain', nameId: 'Spanyol', nameZh: '西班牙' },
  { code: 'CH', dialCode: '+41', flag: '🇨🇭', name: 'Switzerland', nameId: 'Swiss', nameZh: '瑞士' },
  { code: 'MO', dialCode: '+853', flag: '🇲🇴', name: 'Macau', nameId: 'Makau', nameZh: '中国澳门' },
  { code: 'BN', dialCode: '+673', flag: '🇧🇳', name: 'Brunei', nameId: 'Brunei', nameZh: '文莱' },
  { code: 'KH', dialCode: '+855', flag: '🇰🇭', name: 'Cambodia', nameId: 'Kamboja', nameZh: '柬埔寨' },
  { code: 'MM', dialCode: '+95', flag: '🇲🇲', name: 'Myanmar', nameId: 'Myanmar', nameZh: '缅甸' },
  { code: 'LA', dialCode: '+856', flag: '🇱🇦', name: 'Laos', nameId: 'Laos', nameZh: '老挝' },
  { code: 'QA', dialCode: '+974', flag: '🇶🇦', name: 'Qatar', nameId: 'Qatar', nameZh: '卡塔尔' },
  { code: 'RU', dialCode: '+7', flag: '🇷🇺', name: 'Russia', nameId: 'Rusia', nameZh: '俄罗斯' },
  { code: 'TR', dialCode: '+90', flag: '🇹🇷', name: 'Turkey', nameId: 'Turki', nameZh: '土耳其' },
  { code: 'BR', dialCode: '+55', flag: '🇧🇷', name: 'Brazil', nameId: 'Brasil', nameZh: '巴西' },
  { code: 'MX', dialCode: '+52', flag: '🇲🇽', name: 'Mexico', nameId: 'Meksiko', nameZh: '墨西哥' },
  { code: 'ZA', dialCode: '+27', flag: '🇿🇦', name: 'South Africa', nameId: 'Afrika Selatan', nameZh: '南非' },
];

/**
 * Normalizes a phone number into international E.164 format (+<dialCode><nationalDigits>).
 * Supports both Indonesian numbers (with 08/8/62 shortcuts) and international numbers.
 */
export function normalizePhone(input: string, dialCode: string = DEFAULT_DIAL_CODE): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // If input already has a leading '+', respect its dial code:
  if (trimmed.startsWith('+')) {
    const cleanDigits = trimmed.replace(/\D/g, '');
    if (cleanDigits.length >= 7 && cleanDigits.length <= 15) {
      return `+${cleanDigits}`;
    }
    return null;
  }

  const clean = trimmed.replace(/\D/g, '');
  if (!clean) return null;

  // Normalized dial code digits without '+'
  const cleanDialCode = dialCode.replace(/\D/g, '') || '62';

  // If dialCode is Indonesia (+62):
  if (cleanDialCode === '62') {
    if (clean.startsWith('62') && clean.length >= 10 && clean.length <= 15) {
      return `+${clean}`;
    }
    if (clean.startsWith('08') && clean.length >= 10 && clean.length <= 14) {
      return `+62${clean.slice(1)}`;
    }
    if (clean.startsWith('8') && clean.length >= 9 && clean.length <= 13) {
      return `+62${clean}`;
    }
    return null;
  }

  // For other countries:
  // If user typed a leading 0 (common domestic trunk prefix like 04..., 07...), strip it
  const nationalDigits = clean.startsWith('0') ? clean.slice(1) : clean;

  // If user accidentally typed dial code prefix (e.g. "65..." when +65 is selected), avoid duplicate
  const effectiveNational =
    nationalDigits.startsWith(cleanDialCode) && nationalDigits.length > cleanDialCode.length + 4
      ? nationalDigits.slice(cleanDialCode.length)
      : nationalDigits;

  const totalDigits = `${cleanDialCode}${effectiveNational}`;
  if (totalDigits.length >= 7 && totalDigits.length <= 15) {
    return `+${totalDigits}`;
  }

  return null;
}

export function normalizePhoneID(input: string): string | null {
  return normalizePhone(input, '+62');
}

/**
 * Parses an existing full phone string into country and national number parts.
 * Defaults to Indonesia (+62) if unparseable or without prefix.
 */
export function parsePhoneNumber(fullPhone?: string | null): { country: CountryDialCode; nationalNumber: string } {
  const defaultCountry = COUNTRY_DIAL_CODES.find((c) => c.code === 'ID') || COUNTRY_DIAL_CODES[0];
  if (!fullPhone) {
    return { country: defaultCountry, nationalNumber: '' };
  }
  const trimmed = fullPhone.trim();
  if (trimmed.startsWith('+')) {
    // Sort by longest dial code first (e.g. +852 before +8)
    const sorted = [...COUNTRY_DIAL_CODES].sort((a, b) => b.dialCode.length - a.dialCode.length);
    for (const c of sorted) {
      if (trimmed.startsWith(c.dialCode)) {
        return { country: c, nationalNumber: trimmed.slice(c.dialCode.length).trim() };
      }
    }
    const clean = trimmed.replace(/\D/g, '');
    return { country: defaultCountry, nationalNumber: clean };
  }

  const clean = trimmed.replace(/\D/g, '');
  if (clean.startsWith('08')) {
    return { country: defaultCountry, nationalNumber: clean.slice(1) };
  }
  if (clean.startsWith('62')) {
    return { country: defaultCountry, nationalNumber: clean.slice(2) };
  }
  return { country: defaultCountry, nationalNumber: clean };
}

export interface Branch {
  id: string;
  name: string;
  address?: string | null;
  phone?: string | null;
  imageUrl?: string | null;
  openTime?: string | null;
  closeTime?: string | null;
  happyHourEnabled?: boolean;
  happyHourStart?: string | null;
  happyHourEnd?: string | null;
  happyHourDays?: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PointEntry {
  id: string;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  branchId?: string | null;
  branchName?: string | null;
  points: number;
  sourceType: string;
  sourceId?: string | null;
  description: string;
  createdAt: string;
}

export interface PointSummary {
  points: number;
  activeVouchersTotal?: number;
  activeVouchersCount?: number;
  activeVouchers?: CustomerVoucher[];
  activePackagesCount?: number;
  activePackages?: CustomerPackage[];
  totalRemainingSessions?: number;
  credit: number;
  coins?: number;
  activeCoins?: number;
  vouchers?: CustomerVoucher[];
  entries: PointEntry[];
  rates: {
    minSpendPerPoint: number;
    pointsPerThreshold: number;
    redeemPoints?: number;
    redeemMin?: number;
    redeemCredit?: number;
    redeemVoucherAmount?: number;
    maxVouchersStackable?: number;
    allowStacking?: boolean;
    isEnabled?: boolean;
  };
}

export interface Additional {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  isActive: boolean;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface BranchAdditionalPricing {
  id: string;
  branchId: string;
  additionalId: string;
  price: number;
  isAvailable: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface BranchAdditionalItem extends Additional {
  pricingId?: string | null;
  isAvailable: boolean;
}

export interface CustomerVoucher {
  id: string;
  code: string;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  userPhone?: string | null;
  rewardId: string;
  rewardType: 'DISCOUNT_NOMINAL_ALL_BRANCH' | 'DISCOUNT_NOMINAL_SPECIFIC_BRANCH' | 'FREE_TREATMENT' | 'FREE_ADDITIONAL';
  discountType?: 'FIXED' | 'PERCENTAGE';
  discountPercent?: number | null;
  maxDiscount?: number | null;
  rewardName: string;
  imageUrl?: string | null;
  voucherValue: number;
  pointsSpent: number;
  branchId?: string | null;
  branchName?: string | null;
  treatmentId?: string | null;
  treatmentVariantId?: string | null;
  treatmentName?: string | null;
  variantName?: string | null;
  duration?: number | null;
  additionalId?: string | null;
  additionalName?: string | null;
  status: 'ACTIVE' | 'USED' | 'EXPIRED';
  expiresAt?: string | null;
  usedAt?: string | null;
  createdAt?: string;
}

export interface CustomerPackageSession {
  id: string;
  customerPackageId: string;
  sessionNumber: number;
  treatmentId?: string | null;
  treatmentVariantId?: string | null;
  treatmentName?: string | null;
  variantName?: string | null;
  duration?: number | null;
  additionalId?: string | null;
  additionalName?: string | null;
  quantity?: number | null;
  status: 'UNUSED' | 'USED' | 'EXPIRED';
  usedAt?: string | null;
  usedBranchId?: string | null;
  usedBranchName?: string | null;
}

export interface CustomerPackage {
  id: string;
  code: string;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  packageId: string;
  packageName: string;
  imageUrl?: string | null;
  treatmentId?: string | null;
  treatmentVariantId?: string | null;
  items?: Array<{
    type?: 'treatment' | 'additional';
    treatmentId?: string;
    treatmentVariantId?: string;
    treatmentName?: string;
    variantName?: string;
    duration?: number;
    additionalId?: string;
    additionalName?: string;
    quantity?: number;
    sessionCount?: number;
  }> | null;
  totalSessions: number;
  usedSessions: number;
  remainingSessions: number;
  pricePaid: number;
  branchScope: 'ALL_BRANCHES' | 'SPECIFIC_BRANCH';
  branchId?: string | null;
  branchName?: string | null;
  pointsEarningMode: 'EARN_ON_PURCHASE' | 'EARN_ON_REDEMPTION';
  status: 'ACTIVE' | 'EXHAUSTED' | 'EXPIRED';
  expiresAt?: string | null;
  createdAt?: string;
  sessions?: CustomerPackageSession[];
}

export interface GiftVoucherReward {
  id: string;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  rewardType: 'DISCOUNT_NOMINAL_ALL_BRANCH' | 'DISCOUNT_NOMINAL_SPECIFIC_BRANCH' | 'FREE_TREATMENT' | 'FREE_ADDITIONAL';
  discountType?: 'FIXED' | 'PERCENTAGE';
  discountPercent?: number | null;
  maxDiscount?: number | null;
  pointsRequired: number;
  voucherValue: number;
  branchId?: string | null;
  branchName?: string | null;
  treatmentId?: string | null;
  treatmentName?: string | null;
  treatmentVariantId?: string | null;
  variantName?: string | null;
  duration?: number | null;
  additionalId?: string | null;
  additionalName?: string | null;
  isRedeemable: boolean;
  isIndefiniteExpiry: boolean;
  validDays?: number | null;
  isArchived: boolean;
}

export interface CashierPromo {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  maxDiscount?: number | null;
  minSpend: number;
  requiresVerification: boolean;
  verificationPlaceholder?: string | null;
  branchId?: string | null;
  branchName?: string | null;
  isActive: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TreatmentPackageItem {
  id: string;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  treatmentId?: string | null;
  treatmentName?: string | null;
  treatmentVariantId?: string | null;
  variantName?: string | null;
  variantDuration?: number | null;
  items?: any[] | null;
  sessionCount: number;
  price: number;
  normalPrice?: number | null;
  branchScope: 'ALL_BRANCHES' | 'SPECIFIC_BRANCH';
  branchId?: string | null;
  branchName?: string | null;
  pointsEarningMode: 'EARN_ON_PURCHASE' | 'EARN_ON_REDEMPTION';
  isAvailableForSale: boolean;
  isIndefiniteExpiry: boolean;
  validDays?: number | null;
  isArchived: boolean;
}

export interface Transaction {
  id: string;
  transactionNumber: string;
  branchId: string;
  branchName?: string | null;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  userPhone?: string | null;
  checkoutMode: 'DIRECT_AMOUNT' | 'TREATMENT_ITEMS';
  directAmount?: number | null;
  items?: Array<{
    treatmentId?: string;
    treatmentVariantId?: string;
    treatmentName?: string;
    variantName?: string;
    duration?: number;
    price?: number;
    quantity?: number;
    isAddon?: boolean;
  }> | null;
  useVipRoom: boolean;
  vipRoomId?: string | null;
  vipRoomName?: string | null;
  vipRoomFee?: number | null;
  grossTotal: number;
  voucherDiscount: number;
  packageDiscount?: number;
  freeVipRoomsCount?: number;
  freeTreatmentsCount?: number;
  usedVouchers?: Array<{
    id?: string;
    code?: string;
    rewardName?: string;
    rewardType?: string;
    voucherValue?: number;
    freeVipRoom?: boolean;
    freeTreatment?: boolean;
    discountAmount?: number;
  }> | null;
  usedPackages?: Array<{
    packageId?: string;
    customerPackageId?: string;
    code?: string;
    packageName?: string;
    sessionId?: string;
    sessionNumber?: number;
    treatmentName?: string;
    variantName?: string;
    discountAmount?: number;
  }> | null;
  paymentFee?: number;
  cashierPromoId?: string | null;
  cashierPromoName?: string | null;
  cashierPromoDiscount?: number;
  cashierPromoNote?: string | null;
  therapistName?: string | null;
  netPaidAmount: number;
  pointsEarned: number;
  paymentMethod: string;
  notes?: string | null;
  cashierName?: string | null;
  isVoided?: boolean;
  voidReason?: string | null;
  voidedAt?: string | null;
  voidedBy?: string | null;
  voidedByName?: string | null;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  phoneNumber?: string | null;
  phoneVerified?: boolean;
  phoneVerifiedAt?: string | null;
  gender?: Gender | null;
  role: 'superadmin' | 'admin' | 'user';
  pointsBalance?: number;
  createdAt?: string;
  updatedAt?: string;

  // Soft delete & recovery metadata (30-day grace period)
  deletedAt?: string | null;
  deletedBy?: string | null;
  deletedReason?: string | null;
  daysRemaining?: number | null;
  canRestore?: boolean;
  isDeleted?: boolean;
}

export interface Customer extends User {
  registeredAt?: string;
  phone?: string;
}

export interface SystemSettings {
  id: string;
  csWhatsappNumber?: string | null;
  csWhatsappName?: string | null;
  csWhatsappGreeting?: string | null;
  paymentFees?: PaymentFeesMap;
  includeFeeInPoints?: boolean;
  updatedBy?: string | null;
  updatedAt?: string;
}

export interface PhoneVerificationRequest {
  id: string;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  phoneNumber: string;
  verificationCode: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'EXPIRED';
  verifiedBy?: string | null;
  verifiedByName?: string | null;
  verifiedAt?: string | null;
  expiresAt: string;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export const DEFAULT_RATES = {
  minSpendPerPoint: 100000,
  pointsPerThreshold: 1,
  redeemPoints: 25,
  redeemMin: 25,
  redeemCredit: 100000,
  redeemVoucherAmount: 100000,
  maxVouchersStackable: 5,
  allowStacking: true,
  isEnabled: true,
};

export interface MobileFeatureFlagDefinition {
  key: string;
  label: string;
  category: 'loyalty' | 'home' | 'account';
  description: string;
  icon: string;
  defaultValue: boolean;
}

export const MOBILE_FEATURE_FLAGS_METADATA: MobileFeatureFlagDefinition[] = [
  {
    key: 'mobile_loyalty_card',
    label: 'Kartu Saldo & Loyalty Poin',
    category: 'loyalty',
    description: 'Tampilkan banner saldo poin, voucher aktif, dan ringkasan paket reward di beranda mobile.',
    icon: 'star-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_loyalty_redemption',
    label: 'Katalog & Penukaran Reward Poin',
    category: 'loyalty',
    description: 'Izinkan member menukarkan poin dengan voucher potongan harga atau paket sesi layanan.',
    icon: 'gift-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_branch_list',
    label: 'Daftar Cabang & Pilihan Outlet',
    category: 'home',
    description: 'Tampilkan daftar cabang operasional, alamat, dan tombol navigasi lokasi cabang di beranda.',
    icon: 'business-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_happy_hour',
    label: 'Promo Happy Hour Cabang',
    category: 'home',
    description: 'Tampilkan badge diskon khusus Happy Hour pada outlet yang memberlakukannya.',
    icon: 'time-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_profile_nudge',
    label: 'Pengingat Kelengkapan Profil',
    category: 'account',
    description: 'Tampilkan kartu peringatan jika nomor telepon WhatsApp atau data profile member belum lengkap.',
    icon: 'alert-circle-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_support_link',
    label: 'Bantuan Kontak CS WhatsApp',
    category: 'account',
    description: 'Sediakan tombol bantuan customer service resmi langsung ke WhatsApp di profile dan bantuan.',
    icon: 'logo-whatsapp',
    defaultValue: true,
  },
  {
    key: 'mobile_dark_mode',
    label: 'Opsi Mode Gelap Mobile',
    category: 'account',
    description: 'Berikan pilihan tema mode gelap di pengaturan profile aplikasi mobile pelanggan.',
    icon: 'moon-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_transaction_history',
    label: 'Tab Riwayat Transaksi Member',
    category: 'loyalty',
    description: 'Tampilkan riwayat kunjungan, struk transaksi, dan histori perolehan poin pelanggan.',
    icon: 'receipt-outline',
    defaultValue: true,
  },
];

export const DEFAULT_FLAG_VALUES: Record<string, boolean> = {
  mobile_loyalty_card: true,
  mobile_loyalty_redemption: true,
  mobile_branch_list: true,
  mobile_happy_hour: true,
  mobile_profile_nudge: true,
  mobile_support_link: true,
  mobile_dark_mode: true,
  mobile_transaction_history: true,
};

// Formatters
export function formatPoints(points?: number | null): string {
  if (points === undefined || points === null || isNaN(Number(points))) return '0';
  return Number(points).toLocaleString('id-ID');
}

export function formatRupiah(amount?: number | null): string {
  if (amount === undefined || amount === null || isNaN(Number(amount))) return 'Rp 0';
  return `Rp ${Number(amount).toLocaleString('id-ID')}`;
}

export const rp = formatRupiah;

export function formatName(params: { name?: string | null }): string {
  const raw = (params?.name || '').trim();
  if (!raw) return 'Tamu';
  return raw
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

export function isRedemption(entry?: { sourceType?: string; points?: number } | null): boolean {
  if (!entry) return false;
  if (entry.sourceType === 'VOUCHER_REDEMPTION') return true;
  return Number(entry.points) < 0;
}

export function creditForPoints(points: number, rate = 4000): number {
  return Math.max(0, points) * rate;
}

export function redeemProblem(points: number, rates = DEFAULT_RATES): string | null {
  if (!points || isNaN(points) || points <= 0) return 'Masukkan jumlah poin valid.';
  const step = rates.redeemPoints || 25;
  if (points % step !== 0) return `Poin harus kelipatan ${step}.`;
  return null;
}

// Payment Method Fees
export type PaymentFeeType = 'percentage' | 'flat';

export interface PaymentFeeConfig {
  type: PaymentFeeType;
  value: number; // For percentage: e.g. 1.5 for 1.5%. For flat: e.g. 2000 for Rp 2.000
  enabled?: boolean;
}

export type PaymentFeesMap = Record<string, PaymentFeeConfig>;

export const DEFAULT_PAYMENT_FEES: PaymentFeesMap = {
  CASH: { type: 'flat', value: 0, enabled: false },
  QRIS: { type: 'percentage', value: 0.7, enabled: false },
  DEBIT: { type: 'flat', value: 0, enabled: false },
  CREDIT: { type: 'percentage', value: 2.0, enabled: false },
  TRANSFER: { type: 'flat', value: 0, enabled: false },
};

export function calculatePaymentFee(
  baseAmount: number,
  feeConfig?: PaymentFeeConfig | null
): number {
  if (!feeConfig || !feeConfig.enabled || baseAmount <= 0) return 0;
  if (feeConfig.type === 'percentage') {
    return Math.round((baseAmount * Number(feeConfig.value || 0)) / 100);
  }
  return Math.round(Number(feeConfig.value || 0));
}

/**
 * Converts a Date object to YYYY-MM-DD string using local calendar time (avoids UTC timezone shift).
 */
export function formatISODate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Safely parses YYYY-MM-DD string into a local Date object.
 * Returns null if the string is not a valid date or contains nonexistent calendar days (e.g. Feb 30).
 */
export function parseISODate(str: string | null | undefined): Date | null {
  if (!str || typeof str !== 'string') return null;
  const trimmed = str.trim();
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (!match) return null;

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  if (month < 1 || month > 12 || day < 1 || day > 31) return null;

  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

/**
 * Validates and sanitizes a birthday string (YYYY-MM-DD).
 *
 * Rules:
 * 1. Must match YYYY-MM-DD format.
 * 2. Must be a valid real calendar date.
 * 3. Cannot be in the future.
 * 4. Year must be at least 1900.
 */
export function sanitizeDateOfBirth(input: unknown): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  const parsed = parseISODate(trimmed);
  if (!parsed) return null;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  if (parsed.getTime() > today.getTime()) {
    return null;
  }

  if (parsed.getFullYear() < 1900) {
    return null;
  }

  return formatISODate(parsed);
}

const MONTHS_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Formats YYYY-MM-DD into a localized friendly display string, e.g. "25 Agustus 1995".
 */
export function formatDisplayDate(isoDate: string | null | undefined, locale: 'id' | 'en' = 'id'): string {
  if (!isoDate) return '';
  const parsed = parseISODate(isoDate);
  if (!parsed) return isoDate;

  const day = parsed.getDate();
  const monthName = locale === 'id' ? MONTHS_ID[parsed.getMonth()] : MONTHS_EN[parsed.getMonth()];
  const year = parsed.getFullYear();

  return locale === 'id' ? `${day} ${monthName} ${year}` : `${monthName} ${day}, ${year}`;
}

