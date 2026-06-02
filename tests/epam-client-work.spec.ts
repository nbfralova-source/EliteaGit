import { test, expect } from '@playwright/test';

test('Services menu leads to Client Work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesMenu = page.getByRole('link', { name: 'Services' }).first();
  await servicesMenu.click();

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
