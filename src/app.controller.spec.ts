import { AppModule } from '../src/app.module';
import funcin = require('../test/inputfile-test');

describe('root', () => {
  it('should be defined', () => {
    expect(AppModule).toBeDefined();
  });

  describe('Input file test', () => {
    it('should have a parseInput method', () => {
      expect(typeof funcin.InputFileTest.parseInputMethod).toBe('function');
    });
  });
  describe('Output file test', () => {
    it('should have a parseOutput method', () => {
      expect(typeof funcin.InputFileTest.parseOutputMethod).toBe('function');
    });
  });
  describe('Output file test', () => {
    it('expects to return concatenated string', () => {
      expect(funcin.InputFileTest.parseInputMethod('input.txt')).toBe(
        'input.txt',
      );
    });
  });
  describe('Output file test', () => {
    it('expects to return concatenated string', () => {
      expect(funcin.InputFileTest.parseOutputMethod('output.txt')).toBe(
        'output.txt',
      );
    });
  });
});
