/* eslint-disable no-console */
/* eslint-disable import/named */
import { CommandClient, event, command, CommandContext } from '../deps.ts';

class Harmony extends CommandClient {
  constructor() {
    super({
      prefix: ['!'],
      caseSensitive: false
    });
  }

  @event()
  ready(): void {
    console.log(`Logado como ${this.user?.tag}`);
  }

  @command({ aliases: 'ping' })
  Ping(ctx: CommandContext): void {
    ctx.message.reply(`Latência em \`${ctx.client.gateway.ping}ms\``);
  }
}

export default Harmony;
