import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { createUserDto } from './dtos/create.dto';
import { Document, User, UserSchema } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<Document>) {}

  async getUserById(userId: ObjectId): Promise<any> {
    try {
      const result = await this.userModel.findById({ userId }).lean();
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.userModel.findOne({ email }).lean();
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async register(userData: createUserDto): Promise<any> {
    const oldUser = this.getUserByEmail(userData.email);
    if (oldUser) {
      throw new HttpException(
        '이미 가입된 유저가 있습니다.',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    await this.userModel.create(userData);
  }
}
