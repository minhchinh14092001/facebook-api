import { Response } from 'express';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
import { AuthenticationService } from '../services/authentication.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    register(res: Response, data: RegisterDto): Promise<Response<any, Record<string, any>>>;
    login(dto: LoginDto): Promise<{
        user: import(".prisma/client").User;
        token: any;
    }>;
}
