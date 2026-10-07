/*!
 * Live2D Widget* Live2D 小部件
 * https://github.com/stevenjoezhang/live2d-widget
 */

// Recommended to use absolute path for live2d_path parameter// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径// 建议为 live2d_path 参数使用绝对路径
// live2d_path 参数建议使用绝对路径// 建议使用 live2d_path 参数的绝对路径
const live2d_path = 'https://fastly.jsdelivr.net/gh/fkyh404/live2d-static-api@latest/';
// const live2d_path = '/dist/';

// Method to encapsulate asynchronous resource loading// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法// 用于封装异步资源加载的方法
// 封装异步加载资源的方法
function loadExternalResource(url, type) {函数 loadExternalResource(url, type类型) {函数 loadExternalResource加载外部资源(url网址, type类型) {函数loadExternalResource(url网址, type类型) {
  return返回 new新 Promise承诺((resolve解决, reject拒绝) => {返回 新 Promise((resolve, reject) => {
    let tag;让 标签;

    if (type类型 === 'css') {
      tag = document.createElement('link');标签 = document.createElement('link');标签 = 文档.创建元素('链接');标签 = 文档.createElement('链接');
      tag标签.rel关系 = 'stylesheet'“样式表”;标签.rel = 'stylesheet';
      tag.href = url;标签.href = 网址;标签.href = url;标签.href = 网址;
    }
    else if (type === 'js') {
      tag = document.createElement('script');
      tag.type = 'module';
      tag.src = url;标签.属性 = 网址;
    }
    if (tag) {如果 (标签) {如果 (标签) {如果 (标签) {
      tag.onload = () => resolve(url);标签.加载时 = () => 解析(网址);
      tag.onerror = () => reject(url);标签.onerror错误时 = () => reject拒绝(url网址);
      document.head.appendChild(tag);文档.头部.appendChild(标签);文档头部标签
    }
  });
}

(async () => {(异步 () => {
  // If you are concerned about display issues on mobile devices, you can use screen.width to determine whether to load
  // 如果担心手机上显示效果不佳，可以根据屏幕宽度来判断是否加载
  // if (screen.width < 768) return;

  // Avoid cross-origin issues with image resources
  // 避免图片资源跨域问题
  const OriginalImage = window.Image;
  window.Image = function(...args) {
    const img = new OriginalImage(...args);
    img.crossOrigin = "anonymous";
    return img;
  };
  window.Image.prototype = OriginalImage.prototype;
  // Load waifu.css and waifu-tips.js
  // 加载 waifu.css 和 waifu-tips.js
  await Promise.all([
    loadExternalResource(live2d_path + 'waifu.css', 'css'),
    loadExternalResource(live2d_path + 'waifu-tips.js', 'js')
  ]);
  // For detailed usage of configuration options, see README.en.md
  // 配置选项的具体用法见 README.md
  initWidget({
    waifuPath: live2d_path + 'waifu-tips.json',
    // cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
    cubism2Path: live2d_path + 'live2d.min.js',
    cubism5Path: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js',
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
    logLevel: 'warn',
    drag: false,
  });
})();

console.log(`\n%cLive2D%cWidget%c\n`, 'padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;', 'padding: 8px; background: #ff5450; font-size: large; color: #eee;', '');

/*
く__,.ヘヽ.        /  ,ー､ 〉
         ＼ ', !-─‐-i  /  /´
         ／｀ｰ'       L/／｀ヽ､
       /   ／,   /|   ,   ,       ',
     ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
      ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
        !,/7 '0'     ´0iソ|    |
        |.从"    _     ,,,, / |./    |
        ﾚ'| i＞.､,,__  _,.イ /   .i   |
          ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
            | |/i 〈|/   i  ,.ﾍ |  i  |
           .|/ /  ｉ：    ﾍ!    ＼  |
            kヽ>､ﾊ    _,.ﾍ､    /､!
            !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
            ﾚ'ヽL__|___i,___,ンﾚ|ノ
                ﾄ-,/  |___./
                'ｰ'    !_,.:
*/
