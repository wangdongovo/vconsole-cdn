// 定义 ConsoleConfig 接口
interface ConsoleConfig {
  backgroundGradient: string;
  messageStyle: string;
  highlight: string;
}

// 定义 ConsoleType 接口
interface ConsoleType {
  name: string;
  config: ConsoleConfig;
}

// 定义一个空的 vconsoles 对象，用于存储 console 方法
const vconsoles: Record<string, Function> = {};

// 创建函数 createVConsole，用于生成 console 方法
const createVConsole = (consoleTypes: ConsoleType[]): void => {
  consoleTypes.forEach(({ name, config }) => {
    vconsoles[name] = (...args: any[]) => {
      const currentDate = new Date();
      const currentTime = currentDate.toISOString().replace('T', ' ').slice(0, -5);
      console.log(
        `%c${currentTime}%c ${args.shift()} `,
        `background: ${config.backgroundGradient}; color: white; ${config.messageStyle}; padding: 0.3em; border-radius: 0.3em;`, // 渐变背景色
        `${config.messageStyle}color: ${config.highlight}; font-weight: bold; font-size: 1.2em;`, // 参数样式，加粗并放大
        ...args // 其余参数保持不变
      );
    };
  });
};

// 定义 consoleTypes 数组，包含各种控制台方法的样式信息
const consoleTypes: ConsoleType[] = [
  {
    name: 'log',
    config: {
      backgroundGradient: 'linear-gradient(to right, #3498DB, #2C3E50)', // 深蓝色
      messageStyle: 'padding: 1px;', // 调整文字样式
      highlight: '#3498DB' // 深蓝色
    }
  },
  {
    name: 'warn',
    config: {
      backgroundGradient: 'linear-gradient(to right, #F39C12, #D35400)', // 橙色渐变
      messageStyle: 'padding: 1px;', // 调整文字样式
      highlight: '#F39C12' // 橙色
    }
  },
  {
    name: 'error',
    config: {
      backgroundGradient: 'linear-gradient(to right, #E74C3C, #C0392B)', // 红色渐变
      messageStyle: 'padding: 1px;', // 调整文字样式
      highlight: '#E74C3C' // 红色
    }
  },
  {
    name: 'success',
    config: {
      backgroundGradient: 'linear-gradient(to right, #2ECC71, #27AE60)', // 绿色渐变
      messageStyle: 'padding: 1px;', // 调整文字样式
      highlight: '#2ECC71' // 绿色
    }
  }
];

// 调用 createVConsole 函数，根据 consoleTypes 生成对应的控制台方法
createVConsole(consoleTypes);

// 导出每个控制台方法
export const log = vconsoles.log;
export const warn = vconsoles.warn;
export const error = vconsoles.error;
export const success = vconsoles.success;
