import { CommandFactory } from 'nest-commander';
import { SayHelloModule } from './app.module';

async function bootstrap() {
  await CommandFactory.run(SayHelloModule);
}
bootstrap();
