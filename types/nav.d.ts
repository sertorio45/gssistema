import type { UserRole } from './auth'

export interface NavLink {
  title: string
  link: string
  icon?: string
  new?: boolean
  requiredRoles?: UserRole[]
}

export interface NavSectionTitle {
  heading: string
}

export interface NavGroup {
  title: string
  icon?: string
  new?: boolean
  requiredRoles?: UserRole[]
  children: NavLink[]
}

export interface NavMenu {
  heading: string
  items: NavMenuItems
  requiredRoles?: UserRole[]
}

export declare type NavMenuItems = (NavLink | NavGroup | NavSectionTitle)[]
