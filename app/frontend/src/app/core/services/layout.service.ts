import { Injectable, EventEmitter, Output } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Injectable()
export class LayoutService {

  isLocalShown = true;
  isRemoteShown = true;
  isTagsShown = true;
  isDetailPanelOpen = false;

  set isNavToggled(val) {
    if (this._nav !== val) {
      this.navPanelChanged.emit(val);
    }
    this._nav = val;
  }
  get isNavToggled() {
    return this._nav;
  }
  set isFilePanelOpen(val) {
    if (this._file !== val) {
      this.filePanelChanged.emit(val);
    }
    this._file = val;
  }
  get isFilePanelOpen() {
    return this._file;
  }

  @Output() filePanelChanged = new EventEmitter<boolean>();
  @Output() navPanelChanged = new EventEmitter<boolean>();

  private _file = false;
  private _nav = true;

  constructor(
    private hotkeys: HotkeysService
  ) {
    this.hotkeys.add(new Hotkey('shift+left', (event: KeyboardEvent): boolean => {
      this.isNavToggled = false;
      return false;
    }, undefined, "Minimize left panel"));
    this.hotkeys.add(new Hotkey('shift+right', (event: KeyboardEvent): boolean => {
      this.isNavToggled = true;
      return false;
    }, undefined, "Expand left panel"));
  }

}
