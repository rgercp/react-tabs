export function isTab() {
  return true;
}

export function isTabPanel() {
  return true;
}

export function isTabList(el) {
  return el.type && el.type.tabsRole === 'TabList';
}
