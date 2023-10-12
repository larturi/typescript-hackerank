import * as yargs from 'yargs';

import { divisibleSumPairs } from './divisible-sum-pairs';
import { breakingBestAndWorstRecords } from './breaking-best-and-worst-records';
import { migratoryBirds } from './migratory-birds';

const argv: any = yargs
   .option('name', {
      describe: 'Name of program to run',
      demandOption: true,
      type: 'string',
   })
   .help().argv;

switch (argv.name) {
   case 'divisible-sum-pairs':
      const result1 = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
      console.log(result1);
      break;

   case 'breaking-best-and-worst-records':
      const result2 = breakingBestAndWorstRecords([
         3, 4, 21, 36, 10, 28, 35, 5, 24, 42,
      ]);
      console.log(result2);
      break;

   case 'migratory-birds':
      const result3 = migratoryBirds([
        1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4
      ]);
      console.log(result3);
      break;

   default:
      break;
}
