import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { CreateAuthloginDto } from './dto/create-authlogin.dto';
import { users } from 'models';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class AuthloginService {
  async login(createAuthloginDto: CreateAuthloginDto) {
    try {
      const { username, password } = createAuthloginDto;

      const user = await users.findOne({
        where: { username },
      });
      if (!user) {
        return { message: 'username salah' };
      }

      const result = await bcrypt.compare(password, user.password);
      const token = jwt.sign(
        { username: user.username },
        process.env.TOKEN_RAHASIA,
        { expiresIn: '5m' },
      );
      if (result) {
        return { message: 'login berhasil', token: token };
      } else {
        return { message: 'password salah' };
      }
    } catch (error) {
      return error.message;
    }
  }
}

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) res.send('Access Denied');

    try {
      jwt.verify(token, process.env.TOKEN_RAHASIA);
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: 'invalid token' });
      }
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    //   const req = context.switchToHttp().getRequest();
    //   const token = req.headers.authorization;
    //   if (!token) throw new ForbiddenException(' access denied');
    //   try {
    //     const datajwt: any = jwt.verify(token, process.env.TOKEN_RAHASIA);
    //     console.log(datajwt.username);
    //     if (token !== token) {
    //       throw new ForbiddenException('login gagal, kamu bukan admin');
    //     }
    //     return true;
    //   } catch (error) {
    //     return error.message;
    //   }
    // }
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const token = req.headers.authorization;
    if (!token) res.send('Access Denied');

    try {
      const data = jwt.verify(token, process.env.TOKEN_RAHASIA);
      if (data.username !== 'admin') {
        // throw new ForbiddenException('login gagal, kamu bukan admin');
        res.send('kamu bukan admin ygy');
      }
      return true;
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.json({ message: 'invalid token' });
      }
    }
  }
}
