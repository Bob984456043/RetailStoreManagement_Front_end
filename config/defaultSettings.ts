import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings ={
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "mix",
  "contentWidth": "Fixed",
  "fixedHeader": false,
  "fixSiderbar": true,
  "title": "零售门店管理系统",
  "pwa": false,
  "iconfontUrl": "",
  "menu": {
    "locale": true
  },
  "splitMenus": false,
  "headerHeight": 48
};

export type { DefaultSettings };

export default proSettings;
