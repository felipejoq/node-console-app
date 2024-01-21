import { RecordService } from "./services/records.service.js";

const args = process.argv.slice(2);
const [operation, ...inputs] = args;

new RecordService().showResult(operation, inputs);