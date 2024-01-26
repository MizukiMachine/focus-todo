import { AppDataSource } from '../config/database';
import { User } from './User';
import { isValidEmail } from '../utils/validation';

describe('User Model', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    // テスト実行前にユーザーテーブルをクリア
    await AppDataSource.getRepository(User).clear();
  });

  it('有効なユーザーデータで作成できる', async () => {
    const user = new User();
    user.username = 'testuser';
    user.email = 'test@example.com';
    user.passwordHash = 'hashedpassword';

    const savedUser = await AppDataSource.getRepository(User).save(user);

    expect(savedUser.id).toBeDefined();
    expect(savedUser.username).toBe('testuser');
    expect(savedUser.email).toBe('test@example.com');
    expect(isValidEmail(savedUser.email)).toBe(true);
  });

  it('重複したメールアドレスは保存できない', async () => {
    const user1 = new User();
    user1.username = 'user1';
    user1.email = 'duplicate@example.com';
    user1.passwordHash = 'hashedpassword1';

    await AppDataSource.getRepository(User).save(user1);

    const user2 = new User();
    user2.username = 'user2';
    user2.email = 'duplicate@example.com';
    user2.passwordHash = 'hashedpassword2';

    await expect(
      AppDataSource.getRepository(User).save(user2)
    ).rejects.toThrow();
  });

  it('必須フィールドが欠けている場合は保存できない', async () => {
    const user = new User();
    user.username = 'testuser';
    // emailを意図的に省略

    await expect(
      AppDataSource.getRepository(User).save(user)
    ).rejects.toThrow();
  });
});
