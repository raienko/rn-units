const stylesheet = {
  warning: 'background: yellow; padding: 5px; border-radius: 3px; color: black;',
  success: 'background: #3bbd79; padding: 5px; color: white; border-radius: 3px;',
  info: 'background: blue; padding: 5px; color: white; border-radius: 3px;',
  error: 'background: red; padding: 5px; color: white; border-radius: 3px;',
  in: 'background: green; padding: 3px; border-radius: 3px; color: white;',
  out: 'background: purple; padding: 3px; border-radius: 3px; color: white;',
};

export default new class Logger {
  constructor() {
    this.enabled = global.__DEV__;
  }

  prefixedLog = (style, prefix, ...data) => {
    this.styledLog(null, ...[`%c${prefix}`, style, ...data]);
  };

  styledLog = (style, ...data) => {
    if (!this.enabled) {
      return;
    }
    const options = [];
    data.map(item => options.push(item));

    if (style) {
      options.unshift('%c%s', style);
    }

    console.log(...options);
  };

  log = (...data) => this.styledLog(null, ...data);

  warn = (...data) => this.styledLog(stylesheet.warning, ...data);

  info = (...data) => this.styledLog(stylesheet.info, ...data);

  error = (...data) => this.styledLog(stylesheet.error, ...data);

  success = (...data) => this.styledLog(stylesheet.success, ...data);

  in = (...data) => this.prefixedLog(stylesheet.in, '<--', ...data);

  out = (...data) => this.prefixedLog(stylesheet.out, '-->', ...data);

  help = () => {
    this.log('This is extended logger that adds custom styles and prevents console.logs in release');
    this.log('Logger.log');
    this.warn('Logger.warn');
    this.error('Logger.error');
    this.info('Logger.info');
    this.success('Logger.success');
    this.in('Logger.in');
    this.out('Logger.out');
  }
}();
