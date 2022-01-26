import { QuestionSet, Question } from 'nest-commander';

@QuestionSet({ name: 'personInfo' })
export class InputFileQuestions {
  @Question({
    type: 'input',
    name: 'inputfile',
    message: 'Input the path of Input File Location',
  })
  parseInput(val: string) {
    return val;
  }

  @Question({
    type: 'input',
    name: 'outputfile',
    message: 'Input the path of Output File Location',
  })
  parseOutput(val: string) {
    return val;
  }
}
