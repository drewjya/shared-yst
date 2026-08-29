export type LedgerKind = 'EARNED' | 'REDEEMED' | 'EXPIRED' | 'ADJUSTMENT' | 'PACKAGE_PURCHASE' | 'VOUCHER_REDEMPTION' | 'TRANSACTION';

export type Gender = 'male' | 'female';
export const GENDERS: Gender[] = ['male', 'female'];
export const GENDER_LABEL: Record<Gender, string> = {
  male: 'Male',
  female: 'Female',
};
export const ID_PHONE_HINT = 'Nomor telepon harus diawali dengan 08 atau +62 dan terdiri dari 10-14 digit.';

export function normalizePhoneID(input: string): string | null {
  const clean = input.replace(/\D/g, '');
  if (!clean) return null;
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

export interface CustomerVoucher {
  id: string;
  code: string;
  userId: string;
  userName?: string | null;
  userEmail?: string | null;
  userPhone?: string | null;
  rewardId: string;
  rewardType: 'DISCOUNT_NOMINAL_ALL_BRANCH' | 'DISCOUNT_NOMINAL_SPECIFIC_BRANCH' | 'FREE_TREATMENT' | 'VIP_ROOM';
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
    treatmentId?: string;
    treatmentVariantId?: string;
    treatmentName?: string;
    variantName?: string;
    duration?: number;
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
  rewardType: 'DISCOUNT_NOMINAL_ALL_BRANCH' | 'DISCOUNT_NOMINAL_SPECIFIC_BRANCH' | 'FREE_TREATMENT' | 'VIP_ROOM';
  pointsRequired: number;
  voucherValue: number;
  branchId?: string | null;
  branchName?: string | null;
  treatmentId?: string | null;
  treatmentName?: string | null;
  treatmentVariantId?: string | null;
  variantName?: string | null;
  duration?: number | null;
  isRedeemable: boolean;
  isIndefiniteExpiry: boolean;
  validDays?: number | null;
  isArchived: boolean;
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
  netPaidAmount: number;
  pointsEarned: number;
  paymentMethod: string;
  notes?: string | null;
  cashierName?: string | null;
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
    description: 'Tampilkan kartu peringatan jika nomor telepon WhatsApp atau data profil member belum lengkap.',
    icon: 'alert-circle-outline',
    defaultValue: true,
  },
  {
    key: 'mobile_support_link',
    label: 'Bantuan Kontak CS WhatsApp',
    category: 'account',
    description: 'Sediakan tombol bantuan customer service resmi langsung ke WhatsApp di profil dan bantuan.',
    icon: 'logo-whatsapp',
    defaultValue: true,
  },
  {
    key: 'mobile_dark_mode',
    label: 'Opsi Mode Gelap Mobile',
    category: 'account',
    description: 'Berikan pilihan tema mode gelap di pengaturan profil aplikasi mobile pelanggan.',
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
