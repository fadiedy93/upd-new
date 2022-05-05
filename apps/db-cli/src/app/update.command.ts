import {
  CommandRunner,
  InquirerService,
  Option,
  SubCommand,
  QuestionSet,
  Question,
} from 'nest-commander';
import { DbUpdateService } from '@cra-arc/db-update';
import { ConsoleLogger } from '@nestjs/common';
import { DataIntegrityService } from '@cra-arc/data-integrity';

@QuestionSet({ name: 'update' })
export class UpdateQuestions {
  @Question({
    message: 'Perform all updates or Calldrivers only?',
    name: 'target',
    type: 'list',
    choices: ['all', 'calldrivers'],
    default: 'all',
  })
  parseUpdate(str: string): string {
    return str;
  }
}

@SubCommand({
  name: 'update',
  description: 'Update the database',
})
export class UpdateCommand implements CommandRunner {
  constructor(
    private readonly inquirerService: InquirerService,
    private dataIntegrityService: DataIntegrityService,
    private dbUpdateService: DbUpdateService
  ) {}

  async run(inputs: string[], options?: Record<string, any>) {
    const target =
      options?.target ||
      options?.calldrivers ||
      options?.all ||
      (
        await this.inquirerService.prompt<{ target: string }>('update', {
          ...options,
        })
      ).target;

    if (/calldrivers/i.test(target)) {
      await this.dbUpdateService.updateCalldrivers();
      return;
    }

    await this.dbUpdateService.updateAll();
    await this.dataIntegrityService.fillMissingData();
    await this.dataIntegrityService.cleanPageUrls();
  }

  @Option({
    flags: '-t, --target <target>',
    description: 'The target for updates (all updates or calldrivers-only)',
  })
  parseTarget(str: string) {
    return str;
  }

  @Option({
    flags: '-a, --all',
    description: 'Set the target for updates to "all"',
    defaultValue: false,
  })
  parseAll(all: boolean) {
    return all && 'all';
  }

  @Option({
    flags: '-cd, --calldrivers',
    description: 'Set the target for updates to "calldrivers"',
    defaultValue: false,
  })
  parseCalldrivers(calldrivers: boolean) {
    return calldrivers && 'calldrivers';
  }
}
