import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';

import { LayoutFacade } from '../../+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[]) {}

  onMouseenter(index: number): void {
    const showedSubmenu = this.navLinks[index] && this.navLinks[index].children && this.navLinks[index].children.length > 0;
    this.layoutFacade.setNavItem({ id: 'nav', index, showedSubmenu: !!showedSubmenu, level: 0 });
  }

  onMouseleave(index: number): void {
    if (this.navLinks[index] && (!this.navLinks[index].children || !this.navLinks[index].children.length)) {
      this.layoutFacade.hideSubMenu();
    }
  }
}
