export interface itemDropdown {
  url?: string;
  route?: string;
  text: string;
}

export interface itemNavbar {
  url?: string;
  route?: string;
  dropdown?: itemDropdown[];
  text: string;
}
