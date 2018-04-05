export function isTab() {
  return true;
}

export function isTabPanel(el) {
  return el.type && el.type.tabsRole === 'TabPanel';
}

export function isTabList(el) {
  return el.type && el.type.tabsRole === 'TabList';
}
