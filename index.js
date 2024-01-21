import { RecordController } from "./controller/record.controller.js";
import { RecordService } from "./services/records.service.js";

const args = process.argv.slice(2);
const [operation, ...inputs] = args;

const recordService = new RecordService();
const recordController = new RecordController(recordService);

recordController.showResult({ operation, inputs });