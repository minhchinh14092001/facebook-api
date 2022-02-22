import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
import { AuthenticationService } from '../services/authentication.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    register(data: RegisterDto): Promise<{
        user: import(".prisma/client").User;
    }>;
    login(dto: LoginDto): Promise<{
        user: import(".prisma/client").User;
        token: any;
    }>;
}
