module.exports = {
  // 项目标题
  projectTitle: 'BallCat-admin-COLA',
  // 项目描述
  projectDesc: '整洁面向对象分层架构的后台管理系统',
  // Vue ls 配置
  storageOptions: {
    namespace: 'ballcat/', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  },

  // 开启 websocket，开启此选项需要服务端同步支持 websocket 功能
  // 若服务端不支持，则本地启动时，抛出 socket 异常，导致 proxyServer 关闭
  enableWebsocket: false,

  // 开启布局设置
  enableLayoutSetting: true,

  // ------------- 国际化配置分隔符 -----------------

  // 是否开启国际化
  enableI18n: false,
  // 项目默认语言
  defaultLanguage: 'zh-CN',
  // 支持的语言列表
  supportLanguage: {
    'zh-CN': {
      lang: 'zh-CN',
      title: '简体中文',
      symbol: '🇨🇳'
    },
    'en-US': {
      lang: 'en-US',
      title: 'English',
      symbol: '🇺🇸'
    }
  },
}
