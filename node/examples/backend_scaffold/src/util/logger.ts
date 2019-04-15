import { configure, getLogger } from 'log4js';

const logger = getLogger();
logger.level = 'info';

configure({
	appenders: { out: { type: 'stdout' } },
	categories: { default: { appenders: ['out'], level: 'info' } }
});

export let info = (message: any, ...args: any[]) => {
    logger.info(message, args);
}

export let warning = (message: any, ...args: any[]) => {
    logger.warn(message, args);
}

export let error = (message: any, ...args: any[]) => {
    logger.error(message, args);
}
