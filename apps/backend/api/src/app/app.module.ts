import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { MediasModule } from './media/medias.module';
import { UsersModule } from './users/users.module';

import { AppController } from './app.controller';
import { resolverMap } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      resolvers: [resolverMap]
    }),
    UsersModule,
    EventsModule,
    MediasModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}