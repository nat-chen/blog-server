import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';
import { TokenResponse } from './vo/token.vo';
import { UserInfoSuccessVO } from './vo/user-info.vo';

@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: RegisterDTO })
  @ApiOkResponse({ description: '注册', type: UserInfoSuccessVO })
  @Post('register')
  async register(@Body() registerDTO: RegisterDTO): Promise<UserInfoSuccessVO> {
    return this.userService.register(registerDTO);
  }

  @ApiBody({ type: LoginDTO })
  @ApiOkResponse({ description: '登陆', type: TokenResponse })
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<UserInfoSuccessVO> {
    return this.userService.login(loginDTO);
  }
}
