# Ultrade MCP Server

A standalone MCP server implementation for Ultrade tools. This server provides a set of tools to interact with the Ultrade API, allowing users to manage wallets, markets, and system information.

## System Status
- Version: 2.0.54
- Maintenance Mode: 0 (System Operational)

## Project Structure
```
ultrade-mcp/
├── src/
│   ├── tools/
│   │   ├── utils/
│   │   │   └── responseProcessor.ts
│   │   ├── index.ts
│   │   ├── market.ts
│   │   ├── system.ts
│   │   └── wallet.ts
│   ├── env.ts
│   └── index.ts
├── .env
├── .env.example
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── smithery.yaml
└── tsconfig.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Configure environment variables (create a .env file):
```env
# Required
ULTRADE_API_URL=https://api.testnet.ultrade.org # Ultrade API endpoint

# Optional
ITEMS_PER_PAGE=10  # Number of items per page for paginated responses
```

4. Run the server:
```bash
npm start
```

## Available Tools

### Wallet Tools
- `ultrade_wallet_signin_message`: Generate message from the sign in data
- `ultrade_wallet_signin`: Sign in to trading account
- `ultrade_wallet_key_message`: Generate message from the trading key data
- `ultrade_wallet_add_key`: Add a trading key
- `ultrade_wallet_keys`: Get trading keys
- `ultrade_wallet_revoke_key`: Revoke a trading key
- `ultrade_wallet_withdraw`: Withdraw token
- `ultrade_wallet_trades`: Get filtered wallet trades
- `ultrade_wallet_transactions`: Get filtered wallet transactions
- `ultrade_wallet_withdraw_message`: Generate message from the withdrawal data

### Market Tools
- `ultrade_market_chains`: Get blockchain chains
- `ultrade_market_withdrawal_fee`: Get withdrawal fee
- `ultrade_market_operation_details`: Get operation details
- `ultrade_market_markets`: Get markets
- `ultrade_market_balances`: Get account balances
- `ultrade_market_order_message`: Generate message from the order data
- `ultrade_market_create_orders`: Create new orders
- `ultrade_market_create_order`: Create new order
- `ultrade_market_cancel_orders`: Cancel multiple open orders
- `ultrade_market_cancel_order`: Cancel open order
- `ultrade_market_price`: Get last market price by pair symbol
- `ultrade_market_depth`: Get order book depth
- `ultrade_market_last_trades`: Get last trades
- `ultrade_market_symbols`: Get market symbols
- `ultrade_market_settings`: Get market settings
- `ultrade_market_details`: Get market details
- `ultrade_market_order_by_id`: Get order by ID
- `ultrade_market_orders`: Get orders
- `ultrade_market_open_orders`: Get open orders
- `ultrade_market_history`: Get market history
- `ultrade_market_assets`: Get trading assets
- `ultrade_market_fee_rates`: Get fee rates

### System Tools
- `ultrade_system_time`: Get current system time
- `ultrade_system_maintenance`: Get system maintenance status
- `ultrade_system_version`: Get system version

## Development

To run in development mode with hot reloading:
```bash
npm run dev
```

## Testing

Run tests:
```bash
npm test
```
## License
MIT License

Built with ❤️ by @GoPlausible (@emg110).

