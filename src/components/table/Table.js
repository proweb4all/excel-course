/* eslint-disable */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = 'excel__table'
  toHTML() {
    return createTable()
    //
    //   <div class="row">
    //     <div class="row-info"></div>
    //     <div class="row-data">
    //       <div class="column">A</div>
    //       <div class="column">B</div>
    //       <div class="column">C</div>
    //       <div class="column">D</div>
    //       <div class="column">E</div>
    //     </div>
    //   </div>
    //   <div class="row">
    //     <div class="row-info">1</div>
    //     <div class="row-data">
    //       <div class="cell selected" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //     </div>
    //   </div>
    //   <div class="row">
    //     <div class="row-info">1</div>
    //     <div class="row-data">
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //       <div class="cell" contenteditable>0</div>
    //     </div>
    //   </div>
    // `
  }
}
