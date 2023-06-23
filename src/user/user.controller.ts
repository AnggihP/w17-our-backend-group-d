import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ApiProperty, ApiPropertyOptional, ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';


@UseGuards(JwtGuard)
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiProperty()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @Get('me')
  @ApiBearerAuth()
  @ApiOkResponse({status: 200, description: 'Your profile successfully showed'})
  getMe(@GetUser() user: User) {
    return user;
  }

  @ApiPropertyOptional()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @Patch()
  @ApiBearerAuth()
  @ApiCreatedResponse({status: 200, description: 'Your profile successfully edited'})
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}
