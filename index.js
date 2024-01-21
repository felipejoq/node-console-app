import { RecordService } from "./services/records.service.js";

const args = process.argv.slice(2);
const operation = args[0]

let inputs;
if (args.length > 1)
  inputs = args.slice(1);

new RecordService().showResult(operation, inputs);