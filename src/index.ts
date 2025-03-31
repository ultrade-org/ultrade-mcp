#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { ultradeTools, handleUltradeTools } from './tools/index.js';
import { ResponseProcessor } from './tools/utils/responseProcessor.js';

class UltradeServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'ultrade-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    
    // Error handling
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: ultradeTools
    }));

    // Handle tool execution
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const result = await handleUltradeTools(request.params.name, request.params.arguments);
      return ResponseProcessor.processResponse(result);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Ultrade MCP server running on stdio');
  }
}

const server = new UltradeServer();
server.run().catch(console.error);
