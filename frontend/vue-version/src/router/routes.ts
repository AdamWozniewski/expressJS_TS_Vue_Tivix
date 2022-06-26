type MenuRoute = {
  exact: boolean;
  icon: string;
  name: string;
  title: string;
  visible: string;
}

const routes: MenuRoute[] = [
  { exact: false, icon: 'el-icon-s-home', name: 'VideoSearch', title: 'Home', visible: 'user' },
  { exact: false, icon: 'el-icon-s-home', name: 'Admin', title: 'Secret View', visible: 'admin' },
  { exact: false, icon: 'el-icon-s-data', name: 'Favourities', title: 'Your films', visible: 'user' },
];

export default routes;
