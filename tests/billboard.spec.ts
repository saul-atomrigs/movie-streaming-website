import { test, expect } from '@playwright/test';

test.describe('메인페이지의 영화미리보기 컴포넌트(빌보드)', () => {
  const mockData = {
    videoUrl: 'https://www.youtube.com/watch?v=a976nBHtEaY',
    title: 'Test Title',
    description: 'Test Description',
  };

  test.beforeEach(async ({ page }) => {
    await page.route('**/api/random', async route => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(mockData),
      });
    });
    await page.goto('/');
  });

  test('영화 제목과 상세설명을 보여준다', async ({ page }) => {
    await expect(page.getByText(mockData.title)).toBeVisible();
    await expect(page.getByText(mockData.description)).toBeVisible();
  });

  test('더보기 버튼이 보인다', async ({ page }) => {
    await expect(page.getByRole('button', { name: '더보기' })).toBeVisible();
  });
});
