import { Controller, Get, Post } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly logger: PinoLogger,
    ) {
        this.logger.setContext(AppController.name);
    }

    @Get()
    getHello(): string {
        this.logger.info('Hi from getHello');
        // Prints {"level":30,"time":1631560507217,"pid":448510,"hostname":"wnl1099labs099","req":{"id":"req-1","method":"GET","url":"/","headers":{"content-type":"application/json","user-agent":"PostmanRuntime/7.28.4","accept":"*/*","cache-control":"no-cache","postman-token":"3abb4d6a-6bef-4da6-8a9f-91881e1af138","host":"localhost:5000","accept-encoding":"gzip, deflate, br","connection":"keep-alive","content-length":"20"},"remoteAddress":"127.0.0.1","remotePort":35350},"context":"AppController","msg":"Hi from getHello"}

        return this.appService.getHello();
    }

    @Post()
    postHello(): string {
        this.logger.info('Hi from postHello');
        // {"level":30,"time":1631560533607,"pid":448510,"hostname":"wnl1099labs099","context":"AppController","msg":"Hi from postHello"}

        return this.appService.getHello();
    }
}
