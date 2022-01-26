import {
  Command,
  CommandRunner,
  InquirerService,
  Option,
} from 'nest-commander';
import { createReadStream } from 'fs';
import { join } from 'path';
import { NlpManager } from 'node-nlp';
import fs = require('fs');

@Command({ name: 'sayHello', options: { isDefault: true } })
export class EntityExtractor implements CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {}

  async run(
    inputs: string[],
    options: { inputfile?: string; outputfile?: string },
  ): Promise<void> {
    options = await this.inquirerService.ask('personInfo', options);
    const chunks = [];
    console.log(
      `Input File Location Path Found at Location : ${options.inputfile}`,
    );
    console.log(
      `Input File Location Path Found at Location : ${options.outputfile}`,
    );
    const file = createReadStream(join(process.cwd(), options.inputfile));

    for await (const chunk of file) {
      chunks.push(Buffer.from(chunk));
    }

    const textmsg = Buffer.concat(chunks).toString('utf-8');

    if (typeof textmsg === 'string') {
      this.getText(textmsg, options.outputfile);
    } else {
      console.log('something is wrong ');
    }
  }

  @Option({ flags: '-in <inputfile>' })
  parseInput(val: string) {
    return val;
  }

  @Option({ flags: '-out <outputfile>' })
  parseOutput(val: string) {
    return val;
  }
  storeData = (data, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };
  getText(textmessage: string, outputPath: string): any {
    const manager = new NlpManager({ languages: ['en'], forceNER: true });
    console.log('fetching....');
    (async () => {
      await manager.train();
      manager.save();
      const response = await manager.process('en', textmessage);
      console.log(response);
      this.storeData(response, outputPath);
      console.log('Data has been saved in the required location');
    })();
  }
}
