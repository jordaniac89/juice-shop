import { getDelta } from 'snyk-delta'
import fs from 'fs'

const jsonResultsFromSnykTest = fs.readFileSync("./results_os.txt");

const result = await getDelta(jsonResultsFromSnykTest);

console.log(result)