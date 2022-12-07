import {
  Body,
  Controller,
  Get,
  Headers,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiHeader,
  ApiQuery,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('Usuário')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  @ApiHeader({ name: 'locale', required: true })
  @ApiQuery({ name: 'username', required: false })
  findAll(@Headers() { locale }, @Query('username') username: string) {
    return this.userService.findAll();
  }

  @Post('create')
  @ApiExtraModels(UserResponseDto)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'operação realizada com sucesso segue nesse formato abaixo:',
    schema: {
      $ref: getSchemaPath(UserResponseDto),
    },
  })
  create(@Body() values: CreateUserDto) {
    return this.userService.create(values);
  }

  @ApiExtraModels(UserResponseDto)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'operação realizada com sucesso segue nesse formato abaixo:',
    schema: {
      $ref: getSchemaPath(UserResponseDto),
    },
  })
  @Put('update/:id')
  update(@Param('id') id: string, @Body() values: UpdateUserDto) {
    return this.userService.update(id, values);
  }
}
