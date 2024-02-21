/**
 * メールアドレスの形式が正しいかを検証する
 * @param email 検証対象のメールアドレス
 * @returns 有効なメールアドレスの場合true
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
