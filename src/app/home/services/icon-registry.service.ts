import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  registerIcons() {
    Icon.iconsToRegister().forEach(icon => this.registerIcon(icon));
  }

  private registerIcon(icon: Icon) {
    this.iconRegistry.addSvgIcon(
      icon.name,
      this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
    );
  }
}

class Icon {
  private constructor(private xName: string, private xpath: string) {
    if (xName && !xName.startsWith('custom')) {
      throw new EvalError('icon name should start with custom');
    }
  }

  public static iconsToRegister(): Icon[] {
    return [
      new Icon('custom_fingerprint', 'assets/img/icons/fingerprint_48px.svg'),
      new Icon('', '')
    ];
  }

  get name() {
    return this.xName;
  }

  get path() {
    return this.xpath;
  }

}

