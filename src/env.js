let baseURL;
switch(process.env.NODE_ENV){
    case 'development':
        baseURL='http://dev-mall-pre.pringboot.cn/api';
        break;
    case 'test':
        baseURL='http://test-mall-pre.pringboot.cn/api';
        break;
    case 'prod':
        baseURL='http://mall-pre.pringboot.cn/api';
        break;
   default:
        baseURL='http://mall-pre.pringboot.cn/api';
        break;    
}
export default {
    baseURL
}