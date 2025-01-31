import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth');
  });

  test('should load login page correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '로그인' })).toBeVisible();
    await expect(page.getByLabel('이메일 주소')).toBeVisible();
    await expect(page.getByLabel('비밀번호')).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.getByLabel('이메일 주소').fill('test@sldf.com');
    await page.getByLabel('비밀번호').fill('123123');
    await page.getByRole('button', { name: '로그인' }).click();

    await expect(page).toHaveURL('/');
  });

  test('should toggle between login and register', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '로그인' })).toBeVisible();

    // Click to switch to register
    await page.getByText('지금 가입하세요').click();
    await expect(page.getByRole('heading', { name: '가입하기' })).toBeVisible();
    await expect(page.getByLabel('이름')).toBeVisible();

    // Click to switch back to login
    await page.getByText('로그인하기').click();
    await expect(page.getByRole('heading', { name: '로그인' })).toBeVisible();
  });

  test('logo should navigate to home page', async ({ page }) => {
    await page.getByRole('heading', { name: '넷플릭스' }).click();
    await expect(page).toHaveURL('/');
  });
});
