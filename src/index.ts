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

init();
function dianTao(x,y) {
  //开始助力点淘
  longClick(x, y);
  sleep(1000);
  click('复制');
  sleep(1000);
  console.log('复制成功开机进入点淘');
  app.launchApp("点淘");
  console.log('等待8秒加载助力页面');
  sleep(8000);
  console.log('点击打开助力');
  click('查看详情');
  sleep(2000);
  click('打开');
  sleep(2000);
  click('助力');
  sleep(2000);
  //返回微信
  app.launchApp("微信");
  sleep(2000);
}

var chatName="媳妇助力群";
console.show()
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
click(950, 400);
sleep(1000);
click("群聊的聊天记录");
sleep(1000);
click("进入聊天聊天记录成功");
//开始助力点淘
dianTao(900,450);
//点淘2
dianTao(900, 950);
//点淘3
dianTao(900, 1250);
console.hide();
//执行结束震动1秒提示完成
//device.vibrate(500);