/* eslint-disable import/named */
import { GatewayIntents } from './deps.ts';
import Harmony from './src/Harmony.ts';

new Harmony().connect('your_token_here', [
  GatewayIntents.DIRECT_MESSAGES,
  GatewayIntents.GUILDS,
  GatewayIntents.GUILD_MESSAGES
]);
