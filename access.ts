export function branchLabel(branchName?: string | null): string {
  if (!branchName || !branchName.trim()) return 'Semua Cabang';
  return branchName.trim();
}
