export interface SideNavigation {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: SideNavigation[];
}

export interface TopNavigation {
  name: string;
  route: string;
}

export interface Layout {
  header: boolean;
  sidebar: boolean;
  footer: boolean;
}

