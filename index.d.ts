export as namespace dd;

// JSAPI列表	是否需要dd.config	接口说明
// device.notification.alert	不需要	alert弹窗
// device.notification.confirm	不需要	confirm弹窗
// device.notification.prompt	不需要	prompt弹窗
// device.notification.vibrate	不需要	手机震动
// device.accelerometer.watchShake	不需要	监听shake
// device.accelerometer.clearShake	不需要	取消监听shake
// device.notification.toast	不需要	toast弹窗
// device.notification.actionSheet	不需要	actionSheet弹窗
// device.notification.showPreloader	不需要	显示加载中
// device.notification.hidePreloader	不需要	隐藏加载中
// biz.navigation.setLeft	不需要	设置左侧导航按钮文案
// biz.navigation.setRight	不需要	设置导航栏右侧
// biz.navigation.setTitle	不需要	设置标题
// device.connection.getNetworkType	不需要	获取网络类型
// biz.util.openLink	不需要	打开一个新的H5页面
// biz.util.datepicker	不需要	日期选择器
// biz.util.timepicker	不需要	时间选择器
// biz.util.datetimepicker	不需要	时间日期选择器
// biz.navigation.goBack	不需要	返回上一级页面
// biz.navigation.close	不需要	关闭当前页面
// biz.navigation.setMenu	不需要	设置Menu
// biz.navigation.replace	不需要	替换当前页面
// biz.util.previewImage	不需要	图片预览
// biz.util.chosen	不需要	下拉控件
// ui.input.plain	不需要	输入框
// ui.progressBar.setColors	不需要	设置下拉刷新的颜色
// ui.pullToRefresh.enable	不需要	打开下拉刷新设置
// ui.pullToRefresh.disable	不需要	禁止下拉刷新
// ui.pullToRefresh.stop	不需要	停止下拉刷新
// ui.pullToRefresh.disable	不需要	禁用iOS WebView弹性效果
// ui.webViewBounce.enable	不需要	开启iOS WebView弹性效果
// runtime.permission.requestAuthCode	不需要	获取用于免登code
// device.notification.modal	不需要	弹一个dialog
// biz.util.scan	不需要	扫码
// biz.navigation.setIcon	不需要	设置图标
// ui.nav.preload	不需要	预加载
// ui.nav.go	不需要	跳转
// ui.nav.recycle	不需要	回收
// ui.nav.getCurrentId	不需要	获取当前打开的id
// ui.nav.close	不需要	关闭当前打开的页面
// ui.nav.backTo	不需要	退出到某个id
// ui.nav.push	不需要	压入一个
// ui.nav.pop	不需要	弹出一个
// ui.nav.quit	不需要	退出nav
// device.base.getSettings	不需要	获取设置项
// device.nfc.nfcRead	不需要	读取NFC
// util.domainStorage.setItem	不需要	插入要存储的值
// util.domainStorage.getItem	不需要	获取存储的值
// util.domainStorage.removeItem	不需要	删除存入的值
// service.request.httpOverLwp	不需要	安全通道

// device.geolocation.get	需要	获取地理位置信息
// device.base.getUUID	需要	获取uuid
// device.base.getInterface	需要	获取当前连接wifi
// device.launcher.checkInstalledApps	需要	检查一个app是否在手机上安装
// device.launcher.launchApp	需要	打开一个app
// biz.util.open	需要	打开一些业务逻辑
// biz.util.share	需要	分享
// biz.contact.choose	需要	选人
// biz.user.get	需要	获取用户信息
// biz.util.uploadImage	需要	上传图片
// biz.ding.post	需要	发ding消息
// biz.telephone.call	需要	拨打钉钉电话
// biz.telephone.showCallMenu	需要	拨打普通电话
// biz.chat.chooseConversation	需要	选择会话
// biz.contact.createGroup	需要	创建群聊
// biz.map.locate	需要	定位到地图页面
// biz.map.search	需要	地图页面支持搜索
// biz.map.view	需要	地图预览
// device.geolocation.openGps	需要	打开GPS
// biz.util.uploadImageFromCamera	需要	拍照上传附件
// biz.customContact.multipleChoose	需要	多选自定义选人
// biz.customContact.choose	需要	单选自定义选人
// biz.contact.complexPicker	需要	选人选部门
// biz.contact.departmentsPicker	需要	选部门
// biz.contact.setRule	需要	设置选人规则
// biz.contact.externalComplexPicker	需要	选取外部联系人
// biz.contact.externalEditForm	需要	编辑外部联系人
// biz.chat.pickConversation	需要	获取会话信息
// biz.chat.chooseConversationByCorpId	需要	通过corpid选取会话
// biz.chat.openSingleChat	需要	打开单聊会话
// biz.chat.toConversation	需要	根据chatid跳转到对应会话
// biz.cspace.saveFile	需要	保存钉盘文件
// biz.cspace.preview	需要	预览钉盘文件
// biz.cspace.chooseSpaceDir	需要	选取钉盘目录
// biz.util.uploadAttachment	需要	上传钉盘文件
// biz.clipboardData.setData	需要	复制到粘贴板
// biz.intent.fetchData	需要	获取多选的数据
// biz.chat.locationChatMessage	需要	打开聊天详情到某条消息
// device.audio.startRecord	需要	开始录音
// device.audio.stopRecord	需要	结束录音
// device.audio.onRecordEnd	需要	录音结束
// device.audio.download	需要	下载录音
// device.audio.play	需要	播放录音
// device.audio.pause	需要	录音播放暂停
// device.audio.resume	需要	录音播放恢复
// device.audio.stop	需要	录音播放停止
// device.audio.onPlayEnd	需要	录音播放停止
// device.audio.translateVoice	需要	语音转文字
// biz.util.fetchImageData	需要	获取文件base64数据
// biz.alipay.auth	需要	支付接口授权
// biz.alipay.pay	需要	支付接口支付
// device.nfc.nfcWrite	需要	NFC数据写入
// biz.util.encrypt	需要	数据加密
// biz.util.decrypt	需要	数据揭秘
// runtime.permission.requestOperateAuthCode	需要	获取发送响应式消息Code
// biz.util.scanCard	需要	扫名片
export type JsApiList =
	'device.geolocation.get' |
	'device.base.getUUID' |
	'device.base.getInterface' |
	'device.launcher.checkInstalledApps' |
	'device.launcher.launchApp' |
	'biz.util.open' |
	'biz.util.share' |
	'biz.contact.choose' |
	'biz.user.get' |
	'biz.util.uploadImage' |
	'biz.ding.post' |
	'biz.telephone.call' |
	'biz.telephone.showCallMenu' |
	'biz.chat.chooseConversation' |
	'biz.contact.createGroup' |
	'biz.map.locate' |
	'biz.map.search' |
	'biz.map.view' |
	'device.geolocation.openGps' |
	'biz.util.uploadImageFromCamera' |
	'biz.customContact.multipleChoose' |
	'biz.customContact.choose' |
	'biz.contact.complexPicker' |
	'biz.contact.departmentsPicker' |
	'biz.contact.setRule' |
	'biz.contact.externalComplexPicker' |
	'biz.contact.externalEditForm' |
	'biz.chat.pickConversation' |
	'biz.chat.chooseConversationByCorpId' |
	'biz.chat.openSingleChat' |
	'biz.chat.toConversation' |
	'biz.cspace.saveFile' |
	'biz.cspace.preview' |
	'biz.cspace.chooseSpaceDir' |
	'biz.util.uploadAttachment' |
	'biz.clipboardData.setData' |
	'biz.intent.fetchData' |
	'biz.chat.locationChatMessage' |
	'device.audio.startRecord' |
	'device.audio.stopRecord' |
	'device.audio.onRecordEnd' |
	'device.audio.download' |
	'device.audio.play' |
	'device.audio.pause' |
	'device.audio.resume' |
	'device.audio.stop' |
	'device.audio.onPlayEnd' |
	'device.audio.translateVoice' |
	'biz.util.fetchImageData' |
	'biz.alipay.auth' |
	'biz.alipay.pay' |
	'device.nfc.nfcWrite' |
	'biz.util.encrypt' |
	'biz.util.decrypt' |
	'runtime.permission.requestOperateAuthCode' |
	'biz.util.scanCard';

export interface ConfigOption {
	agentId: string;
	corpId: string;
	timeStamp: number;
	nonceStr: string;
	signature: string;
	jsApiList: JsApiList[];
}

export function config(a: ConfigOption);

export function ready(callback: () => {});

export function error(callback: () => {});

// 获取容器版本号
export const version: string;

export namespace runtime {
	namespace permission {
		// 获取微应用免登授权码
		function requestAuthCode(options: {
			corpId: string;
			onSuccess(result: {
				code: string;
			}),
			onFail(err: any)
		}): void;

		// 获取微应用反馈式操作的临时授权码
		function requestOperateAuthCode(options: {
			corpId: string;
			agentId: string;
			onSuccess(result: {
				code: string;
			}),
			onFail(err: any)
		}): void;
	}
}

export namespace channel {
	namespace permission {
		// 获取服务窗免登授权码
		function requestAuthCode(options: {
			corpId: string;
			onSuccess(result: {
				code: string;
			}),
			onFail(err: any)
		}): void;
	}
}
