const levels: { [key: string]: number } = {
  debug: 0,
  info: 1,
  warning: 2,
  error: 3,
};

const colors: { [key: string]: string } = {
  debug: '\x1b[34m', // Blue
  info: '\x1b[37m', // White
  warning: '\x1b[33m', // Yellow
  error: '\x1b[31m', // Red
};
const resetColor = '\x1b[0m'; // Reset to default color
const logLevel: string = process.env.LOG_LEVEL || 'debug';

function log(level: string, message: string, ...args: any[]) {
  if (levels[level] >= levels[logLevel]) {
    const color = colors[level] || '';
    console.log(
      `${color}[${level.toUpperCase()}]: ${message}${args}${resetColor}`
    );
  }
}

const Logger = {
  debug: (message: string, ...args: any[]) => log('debug', message, args),
  info: (message: string, ...args: any[]) => log('info', message, args),
  warning: (message: string, ...args: any[]) => log('warning', message, args),
  error: (message: string, ...args: any[]) => log('error', message, args),
};

export default Logger;
