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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/services/prisma.service");
const jwt_guard_1 = require("../../authentication/guards/jwt.guard");
const updateProfile_1 = require("../dtos/updateProfile");
let UsersController = class UsersController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findOne(id) {
        return this.prisma.profile.findUnique({ where: { id } });
    }
    findMany(id, data) {
        return this.prisma.profile.update({ where: { id }, data });
    }
    findManyPost(id) {
        return this.prisma.post.findMany({ where: { id } });
    }
};
__decorate([
    (0, common_1.Get)(':id/profile'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/profile'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateProfile_1.UpdateProfile]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id/posts'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findManyPost", null);
UsersController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map