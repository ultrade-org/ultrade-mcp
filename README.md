[![smithery badge](https://smithery.ai/badge/@ultrade-org/ultrade-mcp)](https://smithery.ai/server/@ultrade-org/ultrade-mcp)
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

## Installation

To install or update the Algorand MCP implementation, clone the repository, install the dependencies and build the project":

First check node version to be 23.6.1 or later:
```bash
node -v
```

Upgrade to 23.6.1 or later if needed!

Then check the Claude or Cursor container folders to have mcp-servers folder (if not create one):
```bash
mkdir PATH_ON_YOUR_MACHINE/Claude/mcp-servers
# or for Cursor 
mkdir PATH_ON_YOUR_MACHINE/Cursor/mcp-servers
```
Then clone this repository under mcp-servers folder and install dependencies:

```bash
cd PATH_ON_YOUR_MACHINE/Claude/mcp-servers
# or for Cursor 
cd PATH_ON_YOUR_MACHINE/Cursor/mcp-servers
# Clone the repository
git clone https://github.com/ultrade-org/ultrade-mcp.git
cd ultrade-mcp
# Install dependencies
npm install
# Build the project
npm run build
# Edit the .env file to set your configurations
```
And you are done! Now you can open you MCP config and add the server as :

```json
{
  "mcpServers": {
    "ultrade-mcp": {
      "command": "node",
      "args": [
        "PATH_ON_YOUR_MACHINE/Claude/mcp-servers/ultrade-mcp/dist/index.js"
     ],
      "env": {
        "ALGORAND_NETWORK": "mainnet",
        "ALGORAND_ALGOD_API": "https://mainnet-api.algonode.cloud/v2",
        "ALGORAND_ALGOD": "https://mainnet-api.algonode.cloud",
        "ALGORAND_ALGOD_PORT": "",
        "ALGORAND_TOKEN": "",
        "ALGORAND_AGENT_WALLET_ACTIVE": "problem aim online jaguar upper oil flight stumble mystery aerobic toy avoid file tomato moment exclude witness guard lab opera crunch noodle dune abandon broccoli",
        "ULTRADE_API_URL": "https://api.ultrade.io",
        "ITEMS_PER_PAGE": "10"

      }
    }
  }
}
```
Make sure yopu change the paths to match your local system's paths.

For example on MACOS and Claud, the path would be something like this:

```json
{
  "mcpServers": {
    "ultrade-mcp": {
      "command": "node",
      "args": [
        " /Users/YOUR_USERNAME/Library/Application\ Support/Claude/mcp-servers/ultrade-mcp/packages/server/dist/index.js"
     ]
    }
  }
}
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


## License
MIT License

Built with ❤️ by @GoPlausible (@emg110).

