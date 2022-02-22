"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../guards/jwt.guard");
const loginDto_1 = require("../dtos/loginDto");
const RegisterDto_1 = require("../dtos/RegisterDto");
const authentication_service_1 = require("../services/authentication.service");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async register(res, data) {
        const user = await this.authenticationService.register(data);
        return res.status(common_1.HttpStatus.OK).json({ user: user });
    }
    async login(dto) {
        const user = await this.authenticationService.login(dto);
        return {
            user,
            token: this.authenticationService.generateAccessToken(user),
        };
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RegisterDto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
AuthenticationController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map