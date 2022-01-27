import { TestingModule } from '@nestjs/testing';
import CommandTestFactory from 'nest-commander-testing';
import childProcess from 'child_process';
import { AppModule } from './../src/app.module';
import os from 'os';

describe('Task Command', () => {
  let commandInstance: TestingModule;
  const command = CommandTestFactory.CommandTestFactory;
  beforeAll(async () => {
    commandInstance = await command
      .createTestingCommand({
        imports: [AppModule],
      })
      .compile();
  });

  it('should call the "run" method', async () => {
    const spawnSpy = jest.spyOn(childProcess, 'spawn');
    command.setAnswers(['input.txt', 'output.txt']);
    await command.run(commandInstance, ['run', 'sayHello']);
    expect(spawnSpy).toBeCalledWith([
      'sayHello',
      { shell: os.userInfo().shell },
    ]);
  });
});
