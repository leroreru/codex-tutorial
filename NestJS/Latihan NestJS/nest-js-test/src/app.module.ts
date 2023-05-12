import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdCatDtoModule } from './prod-cat-dto/prod-cat-dto.module';
import { UserDtoModule } from './user-dto/user-dto.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailModule } from './order_detail/order_detail.module';
import {
  AuthloginService,
  LoggerMiddleware,
} from './authlogin/authlogin.service';
import { AuthloginController } from './authlogin/authlogin.controller';
import { AuthloginModule } from './authlogin/authlogin.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: 'localhost',
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE,
        models: [],
        autoLoadModels: true,
      }),
    }),
    ProdCatDtoModule,
    UserDtoModule,
    CustomerModule,
    ProductModule,
    OrdersModule,
    OrderDetailModule,
    AuthloginModule,
  ],
  controllers: [AppController, AuthloginController],
  providers: [AppService, AuthloginService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user-dto');
  }
}
