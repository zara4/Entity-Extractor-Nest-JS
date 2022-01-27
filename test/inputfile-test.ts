import { InputFileQuestions } from 'src/inputquestions';

export class InputFileTest {
  static parseInputMethod(inputtext: string): string {
    return new InputFileQuestions().parseInput(inputtext);
  }

  static parseOutputMethod(outputtext: string): string {
    return new InputFileQuestions().parseOutput(outputtext);
  }
}
