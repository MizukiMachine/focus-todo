describe('isValidEmail', () => {
  test('正しいメールアドレスを検証できる', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user@name@domain.co.jp')).toBe(true);
  });

  test('不正なメールアドレスを検出できる', () => {
    expect(isValidEmail('invalid.email')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('user@')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});
