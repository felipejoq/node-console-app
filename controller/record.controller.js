import { operations } from "../const/operations.js";

export class RecordController {

  constructor(recordService){
    this.recordService = recordService;
  }

  showResult({operation, inputs = []}) {
    switch (operation) {
      case operations.read:
        console.log('*** Record List ***');
        console.table(this.recordService.getRecords())
        break;

      case operations.register:
        console.table(this.recordService.createRecord(inputs))
        break;

      default:
        console.log(`ℹ️\tOperation is required. Try with this operations: ${[...Object.values(operations)].join(', ')}.`);
        break;
    }
  }

}