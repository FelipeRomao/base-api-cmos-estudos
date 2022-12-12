import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: '937218973123k21h3123981273891278' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'feliperomao' })
  username: string;

  @IsString()
  @ApiProperty({ example: 'Fel@2022' })
  password: string;

  @IsString()
  @ApiProperty({ example: 'Fel@2022' })
  email: string;
}

export class UserResponseDto {
  @ApiProperty({ example: '937218973123k21h3123981273891278' })
  id: string;

  @ApiProperty({ example: 'feliperomao' })
  username: string;

  @ApiProperty({ example: 'Fel@2022' })
  password: string;
}
