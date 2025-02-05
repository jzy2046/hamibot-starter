/*
 * @Author: BATU1579
 * @CreateDate: 2022-05-24 16:58:03
 * @LastEditor: BATU1579
 * @LastTime: 2022-09-23 17:45:32
 * @FilePath: \\src\\index.ts
 * @Description: 脚本入口
 */
import { } from "./global";
import { init } from "./lib/init";
var verificationImg = '/sdcard/111aa/666.jpg';
var inToImg = '/sdcard/111aa/22.jpg';
var arrImg = ['/sdcard/111aa/22.jpg',
  '/sdcard/111aa/11.jpg', '/sdcard/111aa/33.jpg',
  '/sdcard/111aa/55.jpg'];
var taoTeCount = 0;

mainFunction();

function mainFunction() {
  init();
  setScreenMetrics(1200, 2640);
  console.show();
  // 请求横屏截图
  requestScreenCapture(false);
  sleep(2000);
  //进入微信聊天复制链接
  toChat();
  sleep(1000);
  helpDianTao();
  helpTaoTe();
  console.hide();
  //执行结束震动1秒提示完成
  device.vibrate(1000);

}

function helpDianTao() {
  //开始助力点淘
  help(900, 550, "点淘");
  // //点淘2
  help(900, 920, "点淘");
  //点淘3
  help(900, 1270, "点淘");
}
//截图方式点击助力按钮
/**
 * @param flag 是否是第一层
 */
function clickFunction(flag: boolean) {
  //开始通过截图内容进行按钮定位和点击操作
  arrImg.forEach(function (value, index, array) {
    // 截图
    var img = captureScreen();
    var templ = images.read(value);
    if (img != null && templ != null) {
      var p = findImage(img, templ);
      if (p) {
        console.log('找到啦:' + p);
        //尝试点击
        click(p.x, p.y);
        console.log('点击成功');
        sleep(1000);
        //如果是第一层就判定 如果是第二层就直接点击后结束了
        console.log(flag + 'inToImg == value');
        if (flag && inToImg == value) {
          console.log('判定成功开始第二层递归');
          //需要再次进行一次点击
          sleep(2000)
          console.log('等待加载第二层页面');
          clickFunction(false);
          return false;
        }
        return false;
      } else {
        console.log('没找到');
      }
      sleep(1000);
    }
  });
}

function helpTaoTe() {
  //淘特1
  help(900, 1620, "淘特");
  
  //淘特2
  help(900, 1900, "淘特");
  //淘特3
  help(900, 2185, "淘特");
  //淘特4
  help(900, 2480, "淘特");
  //滑动翻页到底
  swipe(900, 2300, 900, 450, 300);
  sleep(1000);
  //淘特5
  help(900, 1400, "淘特");
  //淘特6
  help(900, 1690, "淘特");
  //淘特7
  help(900, 1960, "淘特");
  //淘特8
  help(900, 2238, "淘特");
}

function help(x: number, y: number, str: string) {
  //开始助力点淘
  console.log('长按复制坐标:%d ,%d', x, y);
  press(x, y, 1000);
  sleep(1000);
  while (!click('复制'));
  sleep(1000);
  console.log('复制成功开机进入APP');
  app.launchApp(str);
  console.log('等待8秒加载助力页面');
  sleep(8000);
  console.log('点击打开助力');
  clickForName(str, taoTeCount);
  //返回微信
  app.launchApp("微信");
  sleep(2000);
  taoTeCount = taoTeCount + 1;
}


function clickForName(appName: string, count: number) {
  switch (appName) {
    case "点淘":
      console.log('点淘助力方式！');
      clickFunction(true);
      break;
    case "淘特":
      console.log('淘特助力方式！');
      click(620, 1590);
      sleep(2000);
      click(620, 1820);
      sleep(2000);
      if (count == 0){
        //第一次会出现验证滑动验证
        // 截图当前页面
        var img = captureScreen();
        var templ = images.read(verificationImg);
        if (img != null && templ != null) {
          var p = findImage(img, templ);
          if (p) {
            console.log('找到啦:' + p);
            //尝试点击
            swipe(p.x, p.y, p.x + 900, p.y, 500);
            console.log('滑动验证完成!');
            sleep(1000);
          }
        }
      }
      break;
  }
}

//找到微信分享链接集合.
function toChat() {
  var chatName = "淘特点淘助力群";
  //脚本日志开始！
  console.log('开始执行助力脚本！');
  //调整手机未静音
  console.log('设置手机静音避免打扰');
  device.setMusicVolume(0)
  console.log('设置成功');
  console.log('打开微信');
  app.launchApp("微信");
  console.log('微信打开成功');
  console.log('休息两秒开始脚本');
  //暂停2秒
  sleep(2000);
  console.log('点击查询开始搜索群名称：%s', chatName);
  //点击查询群名称
  click(950, 200);
  sleep(1000);
  setText(chatName);
  sleep(1000);
  press(900, 520, 300);
  sleep(1000);
  click("群聊的聊天记录");
  sleep(1000);
  console.log("进入聊天聊天记录成功");
}