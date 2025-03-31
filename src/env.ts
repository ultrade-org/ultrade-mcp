export const env = {
  ultrade_api_url: process.env.ULTRADE_API_URL || 'https://api.ultrade.org',
  items_per_page: parseInt(process.env.ITEMS_PER_PAGE || '10'),
};
