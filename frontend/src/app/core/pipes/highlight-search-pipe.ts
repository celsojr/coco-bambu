import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "highlight"
})
export class HighlightPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(list: any, searchText: string): any[] {
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }

    let regex = new RegExp(searchText, "gi");
    const replaced = list.replace(regex, (match: any) => `<span style='background-color:orange'>${match}</span>`);
    return this._sanitizer.bypassSecurityTrustHtml(replaced);
  }
}
