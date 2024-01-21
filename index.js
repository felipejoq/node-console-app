import { RecordController } from "./controller/record.controller.js";
import { RecordService } from "./services/records.service.js";

const args = process.argv.slice(2);
const [operation, ...inputs] = args;

new RecordController(new RecordService()).showResult({operation, inputs});