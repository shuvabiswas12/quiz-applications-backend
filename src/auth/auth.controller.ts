import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get('/login')
    async login() {
        return {};
    }

    @Post('/create')
    async create() {
        return {};
    }

    @Get('/logout')
    async logout() {
        return {};
    }
}
