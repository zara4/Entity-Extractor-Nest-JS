import { Module } from '@nestjs/common';
import { EntityExtractor } from './main-class';
import { InputFileQuestions } from './inputquestions';

@Module({
  providers: [EntityExtractor, InputFileQuestions],
})
export class SayHelloModule {}
