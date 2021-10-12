import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  // begin:: properties ________
  currentLanguage: string = "English";
  languages: any[] = [];
  // end:: properties ________

  constructor() { }

  ngOnInit(): void {
    this.setLanguages();
  }

  onSelectLanguage(lang: string): void {
    this.currentLanguage = lang;
  }

  setLanguages(): void {
    this.languages = ['English', 'Arabic']
  }


}
