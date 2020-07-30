import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TestModule, UsersModule],
  controllers: [AppController,TestController],
  providers: [AppService,TestService],
})
export class AppModule {}
