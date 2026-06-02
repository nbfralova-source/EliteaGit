import { test, expect } from '@playwright/test';

test('EPAM client work link is visible after navigating through Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: /services/i }).click();
  await page.getByRole('link', { name: /explore our client work/i }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
