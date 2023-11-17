import ansi from '../../../node_modules/ansi-colors-es6/index.js';
function logWithPrefix(message, level = 'info') {
  const prefix = ansi.cyan("[StemLauncher]  » ");
  const timestamp = ansi.gray(new Date().toLocaleString());
  let formattedMessage = '';

  switch (level) {
    case 'info':
      formattedMessage = ansi.green(`[${level.toUpperCase()}] ${message}`);
      break;
    case 'warn':
      formattedMessage = ansi.yellow(`[${level.toUpperCase()}] ${message}`);
      break;
    case 'error':
      formattedMessage = ansi.red(`[${level.toUpperCase()}] ${message}`);
      break;
    case 'log':
      formattedMessage = ansi.gray(`[${level.toUpperCase()}] ${message}`);
    default:
      formattedMessage = ansi.white(`[${level.toUpperCase()}] ${message}`);
  }

  console.log(`${timestamp} ${prefix} ${formattedMessage}`);
}

export const stemLogger = {
  info: (message) => logWithPrefix(message, 'info'),
  warn: (message) => logWithPrefix(message, 'warn'),
  error: (message) => logWithPrefix(message, 'error'),
  log: (message) => logWithPrefix(message, 'log'),
};