import { Tool, ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { walletTools, handleWalletTools } from './wallet.js';
import { marketTools, handleMarketTools } from './market.js';
import { systemTools, handleSystemTools } from './system.js';

// Export all Ultrade tools
export const ultradeTools: Tool[] = [
  ...walletTools,
  ...marketTools,
  ...systemTools
];

// Handle all Ultrade tools
export async function handleUltradeTools(name: string, args: any): Promise<any> {
  try {
    const combinedArgs = { name, ...args };

    // Wallet tools
    if (name.startsWith('ultrade_wallet_')) {
      return handleWalletTools(combinedArgs);
    }

    // Market tools
    if (name.startsWith('ultrade_market_')) {
      return handleMarketTools(combinedArgs);
    }

    // System tools
    if (name.startsWith('ultrade_system_')) {
      return handleSystemTools(combinedArgs);
    }

    throw new McpError(
      ErrorCode.MethodNotFound,
      `Unknown tool: ${name}`
    );
  } catch (error) {
    if (error instanceof McpError) {
      throw error;
    }
    throw new McpError(
      ErrorCode.InternalError,
      `Failed to handle Ultrade tool: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
