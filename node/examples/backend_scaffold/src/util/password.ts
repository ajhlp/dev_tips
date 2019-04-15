import * as dotenv from 'dotenv';
import * as md5 from 'md5';

const result = dotenv.config()

if (result.error) {
  throw result.error
}

export let encrypt = (sourceMD5Password: string): string => {
    return md5(sourceMD5Password + ':' + process.env.USER_PWD_SALT).toLowerCase();
}