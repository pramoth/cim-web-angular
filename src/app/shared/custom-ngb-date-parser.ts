import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class NgbDateParser implements NgbDateParserFormatter {
  dateFormat: string;

  constructor() {
  }

  /**
   * Parses the entered date.
   * @param value the entered date.
   */
  parse(value: string): NgbDateStruct {
    if(!!value){
      let date = new Date(value);
      if(date){
        date = new Date(date.getDate(),date.getMonth(),date.getFullYear() -543);
        return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
      }
    }
    return null;
  }

  /**
   * Formats a date into a language specific string.
   * @param date the data from the model.
   */
  format(date: NgbDateStruct): string {
    let formattedMomentDate = '';
    let value: Date;
    if (date) {
      value = new Date(date.year, date.month - 1, date.day);
      var options = {year: 'numeric', month: '2-digit', day: '2-digit'};
      return value.toLocaleString('th-TH', options);
    }


    return formattedMomentDate;
  }
}
