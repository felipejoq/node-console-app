import fs from 'node:fs';
import { operations } from '../const/operations.js';
import { Record } from '../models/record.model.js';
import { PATH_DATA } from '../const/globals.js';

export class RecordService {

  constructor() {
    this.records = this.getRecords();
  }

  showResult(operation, inputs = []) {
    switch (operation) {
      case operations.read:
        console.log('*** Record List ***');
        console.table(this.records)
        break;

      case operations.register:
        console.table(this.createRecord(inputs))
        break;

      default:
        console.log(`ℹ️\tInvalid operation. Try with this operations: ${[...Object.values(operations)].join(', ')}.`);
        break;
    }
  }

  getRecords() {
    if (this.checkFileExist()) {
      const records = JSON.parse(fs.readFileSync(PATH_DATA));
      return records;
    }
  }

  createRecord(inputs = []) {
    if (inputs.length < 5)
      return `ℹ️\tAll values required: ${Object.getOwnPropertyNames(new Record).join(', ')}.`;

    this.records = [
      ...this.records,
      new Record(...inputs)
    ];

    this.saveRecord(this.records);

    return '✅\tNew Record created.';
  }

  saveRecord(records) {
    try {
      if (this.checkFileExist()) {
        fs.writeFileSync(PATH_DATA, JSON.stringify(records));
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  checkFileExist() {
    try {
      if (!fs.existsSync(PATH_DATA))
        fs.writeFileSync(PATH_DATA, JSON.stringify([]));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}