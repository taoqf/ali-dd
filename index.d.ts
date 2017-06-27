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
	type?: 0 | 1;
	agentId: string;
	corpId: string;
	timeStamp: number;
	nonceStr: string;
	signature: string;
	jsApiList: JsApiList[];
}

// 钉钉统一跳转协议
// 一个第三方客户端app，在其页面内通过一个url跳转可以打开钉钉的客户端，同时钉钉会帮助其打开一个指定的url页面。代码示例如下：
// dingtalk://dingtalkclient/page/link?url=http%3A%2F%2Fwww.laiwang.com
// 需要注意的是url后面的参数（即你希望钉钉打开的url页面地址）必须做urlencode。

export function config(a: ConfigOption);

export function ready(callback: () => void);

export function error(callback: (err: {
	errorCode: number;
	message: string;
}) => void);

// 获取容器版本号
export const version: string;

export namespace runtime {
	namespace permission {
		// 获取微应用免登授权码
		function requestAuthCode(options: {
			corpId: string;
			onSuccess(result: {
				code: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 获取微应用反馈式操作的临时授权码
		function requestOperateAuthCode(options: {
			corpId: string;
			agentId: string;
			onSuccess(result: {
				code: string;
			}): void;
			onFail(err: any): void;
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
			}): void;
			onFail(err: any): void;
		}): void;
	}
}

// 设备
export namespace device {
	// 基础信息
	namespace base {
		function getUUID(options: {
			onSuccess(data: {
				uuid: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 获取热点接入信息
		function getInterface(options: {
			onSuccess(data: {
				ssid: string;
				macIp: string;
			}): void;
			onFail(err: any): void;
		}): void;
	}

	namespace nfc {
		// 读取NFC芯片内容
		// 只支持有nfc功能的android手机
		// 支持NDEF的数据交换格式
		// 使用方法：首先调用此jsapi，然后再把芯片放上去，即可读取，jspai调用一次读取一次信息
		function nfcRead(options: {
			onSuccess(data: {
				content: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 写NFC芯片
		// 只支持有nfc功能的android手机
		// 支持NDEF的数据交换格式
		// 使用方法：首先调用此jsapi，然后再把芯片放上去，即可写入，jsapi调用一次写一次内容

		function nfcWrite(options: {
			content: string;
			onSuccess(data: {
			}): void;
			onFail(err: any): void;
		}): void;
	}

	namespace notification {
		function alert(options: {
			message: string;
			title: string;
			buttonName: string;
			//onSuccess将在点击button之后回调
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		function confirm(options: {
			message: string;
			title: string;
			buttonLabels: string[];
			//onSuccess将在点击button之后回调
			onSuccess(result: {
				buttonIndex: number; //被点击按钮的索引值，Number类型，从0开始
			}): void;
			onFail(err): void;
		}): void;

		function prompt(options: {
			message: string;
			title: string;
			buttonLabels: string[];
			//onSuccess将在点击button之后回调
			onSuccess(result: {
				buttonIndex: number; //被点击按钮的索引值，Number类型，从0开始
				value: string; //输入的值
			}): void;
			onFail(err: any): void;
		}): void;

		// 震动
		function vibrate(options: {
			duration: string; //震动时间，android可配置 iOS忽略
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 显示浮层，请和hidePreloader配对使用
		function showPreloader(options: {
			text: string; //loading显示的字符，空表示不显示文字
			showIcon: boolean; //是否显示icon，默认true
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		function hidePreloader(options: {
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		function toast(options: {
			icon: '' | 'success' | 'error'; //icon样式，有success和error，默认为空 0.0.2
			text: string; //提示信息
			duration: number; //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
			delay: number; //延迟显示，单位秒，默认0
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 单选列表
		function actionSheet(options: {
			title: string; //标题
			cancelButton: string; //取消按钮文本
			otherButtons: string[];
			//onSuccess将在点击button之后回调
			onSuccess(result: {
				buttonIndex: number; //被点击按钮的索引值，Number，从0开始, 取消按钮为-1
			}): void;
			onFail(err: any): void;
		}): void;

		// modal弹浮层
		function modal(options: {
			image: string; // 标题图片地址
			title: string; //标题
			content: string; //文本内容
			buttonLabels: string[];// 最多两个按钮，至少有一个按钮。
			//onSuccess将在点击button之后回调
			onSuccess(result: {
				buttonIndex: number; //被点击按钮的索引值，Number，从0开始
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 地图
	namespace geolocation {
		// 获取当前地理位置
		function get(options: {
			targetAccuracy: number;
			coordinate: number;
			withReGeocode: boolean;
			// 高德坐标 result 结构
			onSuccess(result: {
				longitude: number;
				latitude: number;
				accuracy: number;
				address: string;
				province: string;
				city: string;
				district: string;
				road: string;
				netType: string;
				operatorType: string;
				errorMessage: string;
				errorCode: number;
				isWifiEnabled: string;
				isGpsEnabled: string;
				isFromMock: string;
				provider: 'wifi' | 'lbs' | 'gps';
				isMobileEnabled: boolean;
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 音频
	namespace audio {
		// 开始录音
		function startRecord(options: {
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// 停止录音
		function stopRecord(options: {
			onSuccess(res: {
				mediaId: string; // 返回音频的MediaID，可用于本地播放和音频下载
				duration: number; // 返回音频的时长，单位：秒
			}): void;
			onFail(err): void;
		}): void;
		// 监听录音自动停止
		function onRecordEnd(options: {
			onSuccess(res: {
				mediaId: string; // 停止播放音频MediaID
				duration: number; // 返回音频的时长，单位：秒
			}): void;
			onFail(err: any): void;
		}): void;
		// 下载音频
		function download(options: {
			mediaId: string;
			onSuccess(res: {
				localAudioId: string;
			}): void;
			onFail(err: any): void;
		}): void;
		// 播放语音
		function play(options: {
			localAudioId: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// 暂停播放语音
		function pause(options: {
			localAudioId: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// 恢复暂停播放的语音
		function resume(options: {
			localAudioId: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// 停止播放语音
		function stop(options: {
			localAudioId: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// 监听播放自动停止
		function onPlayEnd(options: {
			onSuccess(res: {
				localAudioId: string;
			}): void;
			onFail(err: any): void;
		}): void;
		// 语音转文字接口
		function translateVoice(options: {
			mediaId: string;
			duration: number;
			onSuccess(res: {
				mediaId: string; // 转换的语音的mediaId
				content: string; // 语音转换的文字内容
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 启动器
	namespace launcher {
		// 检测应用是否安装
		function checkInstalledApps(options: {
			apps: string[]; //iOS:应用scheme;Android:应用包名
			onSuccess(data: {
				installed: string[]; //iOS:应用scheme;Android:应用包名
			}): void;
			onFail(err: any): void;
		}): void;

		// 启动第三方应用
		function launchApp(options: {
			app: string; //iOS:应用scheme;Android:应用包名
			activity: string; //仅限Android，打开指定Activity，可不传。如果为空，就打开App的Main入口Activity
			onSuccess(data: {
				result: boolean; //true 唤起成功 false 唤起失败
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 获取当前网络类型
	namespace connection {
		function getNetworkType(options: {
			onSuccess(data: {
				result: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none'; // result值: wifi 2g 3g 4g unknown none   none表示离线
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 加速器
	namespace accelerometer {
		// 摇一摇 开启监听
		function watchShake(options: {
			sensitivity: number;//振动幅度，Number类型，加速度变化超过这个值后触发shake
			frequency: number;//采样间隔(毫秒)，Number类型，指每隔多长时间对加速度进行一次采样， 然后对比前后变化，判断是否触发shake
			callbackDelay: number;//触发『摇一摇』后的等待时间(毫秒)，Number类型，防止频繁调用
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;
		// 摇一摇 开启监听
		function clearShake(options: {
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;
	}
}

export namespace biz {
	namespace cspace {
		// 转存文件到钉盘
		function saveFile(options: {
			corpId: string;
			url: string;
			name: string;
			onSuccess(data: {
				corpId: string;
				spaceId: string;
				fileId: string;
				fileName: string;
				fileSize: number;
				fileType: string;
			}[]): void;
			onFail(err: any): void;
		}): void;

		function preview(options: {
			corpId: string;
			spaceId: string;
			fileId: string;
			fileName: string;
			fileSize: number;
			fileType: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
	}

	namespace util {
		// 支持多种文件形式上传。禁止恶意上传。
		function uploadAttachment(options: {
			image: { multiple: true, compress: false, max: 9, spaceId: "12345" },
			space: { corpId: "xxx3020", spaceId: "12345", isCopy: 1, max: 9 },
			file: { spaceId: "12345", max: 1 },
			types: ["photo", "camera", "file", "space"],
			//onSuccess将在文件上传成功之后调用
			onSuccess(result: {
				type: 'image' | 'file' | 'space'; // 用户选择了哪种文件类型 ，image（图片）、file（手机文件）、space（钉盘文件）
				data: {
					spaceId: string;
					fileId: string;
					fileName: string;
					fileSize: number;
					fileType: string;
				}[]
			}): void;
			onFail(err: any): void;
		}): void;

		// 上传图片
		function uploadImage(options: {
			multiple: boolean //是否多选，默认false
			max: number; //最多可选个数
			//onSuccess将在图片上传成功之后调用
			onSuccess(result: string[]
			): void;
			onFail(err: any): void;
		}): void;

		// 上传图片（仅支持拍照上传）
		function uploadImageFromCamera(options: {
			compression: boolean;//(是否压缩，默认为true)
			//onSuccess将在图片上传成功之后调用
			onSuccess(result: string[]): void;
			onFail(err: any): void;
		}): void;

		// 图片浏览器
		function previewImage(options: {
			urls: string[];		// 图片地址列表
			current: string;	// 当前显示的图片链接
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 日期选择器
		function datepicker(options: {
			format: 'yyyy-MM-dd' | 'HH:mm' | 'yyyy-MM-dd HH:mm';
			value: string; //默认显示日期
			//onSuccess将在点击完成之后回调
			onSuccess(result: {
				value: "2015-02-10";
			}): void;
			onFail(err: any): void;
		}): void;

		// 下拉控件
		function chosen(options: {
			source: {
				key: string; //显示文本
				value: string; //值，
			}[];
			selectedKey: string; // 默认选中的key
			//onSuccess将在点击完成之后回调
			onSuccess(result: {
				key: string;
				value: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 打开应用内页面
		// a.个人资料页
		function open(options: {
			name: 'profile';//页面名称
			params: {
				id: string;
				corpId: string;
			};
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		// b.聊天页面
		function open(options: {
			name: 'chat';//页面名称
			params: {
				users: string[];	// 用户列表,工号
				corpId: string;
			};
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// c.免费电话页面
		function open(options: {
			name: 'call';//页面名称
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// d.联系人添加页面
		function open(options: {
			name: 'contactAdd';//页面名称
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// f.唤起添加好友页面
		function open(options: {
			name: 'friendAdd';//页面名称
			onSuccess(): void;
			onFail(err: any): void;
		}): void;
		// g.唤起员工管理页面
		function open(options: {
			name: 'manageOrg';//页面名称
			params: {
				corpId: string;
				isManager: boolean;
			};
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		// 在新窗口上打开链接
		function openLink(options: {
			url: string;	// 要打开链接的地址
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		// 分享
		function share(options: {
			type: 0 | 1 | 2;//分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮
			url: string;
			title: string;
			content: string;
			image: string;
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		// ut数据埋点
		function ut(options: {
			key: string;//打点名
			value: string | any;//打点传值
			onSuccess(): void;
			onFail(err: any): void;
		}): void;

		namespace clipboardData {
			// 复制到粘贴版
			function setData(options: {
				text: string; //要复制粘贴板的内容
				onSuccess(): void;
				onFail(): void;
			}): void;
		}

		// 扫描条形码、二维码
		function scan(options: {
			type: 'qrCode' | 'barCode'; // type为qrCode或者barCode
			//onSuccess将在扫码成功之后回调
			onSuccess(data: {
				text: string;
			}): void;
			onFail(err: any): void;
		}): void;
		// 扫描名片
		function scanCard(options: { // 无需传参数
			//onSuccess将在扫码成功之后回调
			onSuccess(data: {
				ADDRESS: string;
				COMPANY: string;
				NAME: string;
				MPHONE: string;
				PHONE: string;
				POSITION: string;
				IMAGE: string;
				dt_tranfer: string;
				request_id: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 客户端加密、解密
		function encrypt(options: {
			corpId: string;//必传,
			data: any;
			onSuccess(data: any): void;
			onFail(err: any): void;
		}): void;

		function decrypt(options: {
			corpId: string;
			data: any;
			onSuccess(data: any): void;
			onFail(err: any): void;
		}): void;
	}

	namespace map {
		//地图定位
		function locate(options: {
			latitude: number; // 纬度
			longitude: number; // 经度
			onSuccess(result: {
				/* result 结构 */
				province: string; // POI所在省会
				provinceCode: string; // POI所在省会编码
				city: string; // POI所在城市
				cityCode: string; // POI所在城市
				adName: string; // POI所在区名称
				adCode: string; // POI所在区编码
				distance: string; // POI与设备位置的距离
				postCode: string; // POI的邮编
				snippet: string; // POI的街道地址
				title: string; // POI的名称
				latitude: number; // POI的纬度
				longitude: number; // POI的经度
			}): void;
			onFail(err: any): void;
		}): void;

		// POI搜索
		function search(options: {
			latitude: number; // 纬度
			longitude: number; // 经度
			scope: number; // 限制搜索POI的范围；设备位置为中心，scope为搜索半径
			onSuccess(poi: {
				/* result 结构 */
				province: string; // POI所在省会
				provinceCode: string; // POI所在省会编码
				city: string; // POI所在城市
				cityCode: string; // POI所在城市
				adName: string; // POI所在区名称
				adCode: string; // POI所在区编码
				distance: string; // POI与设备位置的距离
				postCode: string; // POI的邮编
				snippet: string; // POI的街道地址
				title: string; // POI的名称
				latitude: number; // POI的纬度
				longitude: number; // POI的经度
			}): void;
			onFail(err: any): void;
		}): void;

		// 展示位置
		function view(options: {
			latitude: number; // 纬度
			longitude: number; // 经度
			title: string; // 地址/POI名称
		}): void;
	}

	namespace chat {
		// 获取会话信息
		function pickConversation(options: {
			corpId: string; //企业id
			isConfirm: boolean; //是否弹出确认窗口，默认为true
			//onSuccess将在选择结束之后调用
			onSuccess(result: {
				// 该cid和服务端开发文档-普通会话消息接口配合使用，而且只能使用一次，之后将失效
				cid: string;
				title: string;
			}): void;
			onFail(): void;
		}): void;

		// 根据corpid选择会话
		function chooseConversationByCorpId(options: {
			corpId: string; //企业id
			//onSuccess将在选择结束之后调用
			onSuccess(result: {
				chatId: string;
				title: string;
			}): void;
			onFail(): void;
		}): void;

		// 根据chatid跳转到对应会话
		function toConversation(options: {
			corpId: string; //企业id
			chatId: string;//会话Id
			onSuccess(): void;
			onFail(): void;
		}): void;

		// 打开与某个用户的聊天页面（单聊会话）
		function openSingleChat(options: {
			corpId: string; // 企业id
			userId: string; // 用户的工号
			onSuccess(): void;
			onFail(): void;
		}): void;

		// 拉起对应的会话页面(当前的H5页面会被销毁)
		function locationChatMessage(options: {
			chatId: string; // 消息来源的会话id
			msgId: string;  // 某条消息的消息锚点，进入聊天页面后会根据锚点滚动到锚点对应的消息出，如果用户设备没有这条消息，该字段不会生效.
			corpId: string; // 当前活动的微应用所在企业的corpId
			onSuccess(): void;
			onFail(): void;
		}): void;
	}

	namespace ding {
		// 发钉
		function post(options: {
			users: string[];//用户列表，工号
			corpId: string; //企业id
			type: 1; //附件类型 1：image  2：link
			alertType: 0 | 1 | 2;	// 钉提醒类型 0:电话, 1:短信, 2:应用内
			alertDate: {
				format: "yyyy-MM-dd HH:mm";
				value: string;
			};
			attachment: {
				images: string[];
			}; //附件信息
			text: string; //消息
			// onSuccess将在点击发送之后调用
			onSuccess(): void;
			onFail(): void;
		}): void;
		// 发钉 Link类型
		function post(options: {
			users: string[];//用户列表，工号
			corpId: string; //企业id
			type: 2; //钉类型 1：image  2：link
			alertType: 0 | 1 | 2;	// 钉提醒类型 0:电话, 1:短信, 2:应用内
			alertDate: {
				format: "yyyy-MM-dd HH:mm";
				value: string;
			};
			attachment: {
				title: string;
				url: string;
				image: string;
				text: string;
			};
			text: string; //消息
			onSuccess(): void;
			onFail(): void;
		}): void;
	}

	// 电话
	namespace telephone {
		// 拨打钉钉电话
		function call(options: {
			users: string[]; //用户列表，工号
			corpId: string; //企业id
			onSuccess(): void;
			onFail(): void;
		}): void;

		// 通用电话拨打接口
		function showCallMenu(options: {
			phoneNumber: string; // 期望拨打的电话号码
			code: string; // 国家代号，中国是+86
			showDingCall: boolean; // 是否显示钉钉电话
			onSuccess(): void;
			onFail(): void;
		}): void;
	}

	namespace alipay {
		// 支付接口
		function pay(options: {
			info: string; // 订单信息，
			onSuccess(result: {
				memo: string; // 保留参数，一般无内容
				result: string; // 本次操作返回的结果数据
				resultStatus: string; // 本次操作的状态返回值，标识本次调用的结果
			}): void;
			onFail(err: any): void;
		}): void;
	}

	namespace navigation {
		// 设置导航栏标题
		function setTitle(options: {
			title: string;//控制标题文本，空字符串表示显示默认文本
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 标题栏添加问号Icon
		function setIcon(options: {
			showIcon: boolean;//是否显示icon
			iconIndex: 1 | 2 | 3 | 101 | 102 | 103;//显示的iconIndex,如上图
			//点击icon之后将会回调这个函数
			onSuccess(result: {}): void;
			//jsapi调用失败将会回调此函数
			onFail(err: any): void;
		}): void;

		// 设置左侧导航按钮
		function setLeft(options: {
			show: boolean;//控制按钮显示， true 显示， false 隐藏， 默认true
			control: boolean;//是否控制点击事件，true 控制，false 不控制， 默认false
			showIcon: boolean;//是否显示icon，true 显示， false 不显示，默认true； 注：具体UI以客户端为准
			text: string;//控制显示文本，空字符串表示显示默认文本
			//如果control为true，则onSuccess将在发生按钮点击事件被回调
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 设置导航栏右侧
		function setRight(options: {
			show: boolean;//控制按钮显示， true 显示， false 隐藏， 默认true
			control: boolean;//是否控制点击事件，true 控制，false 不控制， 默认false
			text: string;//控制显示文本，空字符串表示显示默认文本
			//如果control为true，则onSuccess将在发生按钮点击事件被回调
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;

		// 设置导航栏右侧多个按钮
		function setMenu(options: {
			backgroundColor: string;
			textColor: string;
			items: {
				id: string; //字符串
				iconId: string; //字符串，图标命名
				text: string;
			}[],
			onSuccess(data: {
				id: string;
			}): void;
			onFail(err: any): void;
		}): void;

		// 触发关闭
		function close(options: {
			onSuccess(result: {}): void;
			onFail(err: any): void;
		}): void;
	}

	// 企业通讯录
	namespace contact {
		// 选人
		function choose(options: {
			startWithDepartmentId: number; //-1表示打开的通讯录从自己所在部门开始展示, 0表示从企业最上层开始，(其他数字表示从该部门开始:暂时不支持)
			multiple: boolean; //是否多选： true多选 false单选； 默认true
			users: string[]; //默认选中的用户列表，userid；成功回调中应包含该信息
			disabledUsers: string[];	// 不能选中的用户列表，员工userid
			corpId: string; //企业id
			max: number; //人数限制，当multiple为true才生效，可选范围1-1500
			limitTips: string; //超过人数限制的提示语可以用这个字段自定义
			isNeedSearch: boolean; // 是否需要搜索功能
			title: string; // 如果你需要修改选人页面的title，可以在这里赋值
			local: string; // 是否显示本地联系人，默认false
			//onSuccess将在选人结束，点击确定按钮的时候被回调
			onSuccess(data: {
				name: string; //姓名
				avatar: string; //头像图片url，可能为空
				emplId: string; //userid
			}[]): void;
			onFail(err: any): void;
		}): void;
		// 选人，选部门
		function complexChoose(options: {
			startWithDepartmentId: number; //-1表示从自己所在部门开始, 0表示从企业最上层开始，其他数字表示从该部门开始
			selectedUsers: string[]; //预选用户
			disabledUsers: string[]; // 不能选中的用户列表，员工userid
			selectedDepartments: string[]; // 预选中的部门列表，部门id
			disabledDepartments: string[]; // 不能选中的部门列表，部门id
			max?: number; //人数限制，当multiple为true才生效，可选范围1-1500
			limitTips: string; //超过人数限制的提示语可以用这个字段自定义
			local: boolean; // 是否显示本地联系人，默认false
			isNeedSearch: boolean; // 是否需要搜索功能
			corpId: string; //企业id
			//onSuccess将在选人，选部门结束，点击确定按钮的时候被回调
			onSuccess(data: {
				users: {
					name: string; //姓名
					avatar: string; //头像图片url，可能为空
					emplId: string; //userid:
				}[];
				departments: {
					id: 2,
					name: string;
				}[];
			}): void;
			onFail(err: any): void;
		}): void;
		// 选部门
		function complexPicker(options: {
			title: string;            //标题
			corpId: string;              //企业的corpId
			multiple: boolean;            //是否多选
			limitTips: string;          //超过限定人数返回提示
			maxUsers?: number;            //最大可选人数
			pickedUsers: string[];            //已选用户
			pickedDepartments: string[];          //已选部门
			disabledUsers: string[];            //不可选用户
			disabledDepartments: string[];        //不可选部门
			requiredUsers: string[];            //必选用户（不可取消选中状态）
			requiredDepartments: string[];        //必选部门（不可取消选中状态）
			appId: number;              //微应用的Id
			permissionType: 'GLOBAL';          //选人权限，目前只有GLOBAL这个参数
			responseUserOnly: boolean;        //单纯返回人，或者返回人和部门
			onSuccess(result: {
				selectedCount: number;                              //选择人数
				users: {
					name: string;
					avatar: string;
					emplId: string;
				}[];//返回选人的列表，列表中的对象包含name（用户名），avatar（用户头像），emplId（用户工号）三个字段
				departments: {
					id: string;
					name: string;
					number: number;
				}[];//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
			}): void;
			onFail(err: any): void;
		}): void;

		// 选择部门信息
		function departmentsPicker(options: {
			title: string;            //标题
			corpId: string;              //企业的corpId
			multiple: boolean;            //是否多选
			limitTips: string;          //超过限定人数返回提示
			maxDepartments?: number;            //最大选择部门数量
			pickedDepartments: string[];          //已选部门
			disabledDepartments: string[];        //不可选部门
			requiredDepartments: string[];        //必选部门（不可取消选中状态）
			appId: number;              //微应用的Id
			permissionType: 'GLOBAL';          //选人权限，目前只有GLOBAL这个参数
			onSuccess(result: {
				userCount: number;                              //选择人数
				departmentsCount: number;//选择的部门数量
				departments: {
					id: string;
					name: string;
					number: number;
				}[];//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
			}): void;
			onFail(err: any): void;
		}): void;

		// 创建企业群聊天
		function createGroup(options: {
			corpId: string; //企业id，可选，配置该参数即在指定企业创建群聊天
			users: string[]; //默认选中的用户工号列表，可选；使用此参数必须指定corpId
			onSuccess(result: {
				id: number;   //企业群id
			}): void;
			onFail(err: any): void;
		}): void;

		// 设定规则选人
		function setRule(options: {
			title: string;//标题
			multiple: boolean; //是否多选： true多选 false单选； 默认true
			selectRuledUsers: boolean; // 是否需要去取默认的uid list
			corpId: string; //企业id，corpid必须是用户所属的企业的corpid
			maxUsers?: number; //人数限制，当multiple为true才生效，可选范围1-1500
			limitTips: string; //超出选人的人数限制之后的提示
			appId: string; //企业appid ， 非必填
			permissionType: string;//权限类型，非必填
			agentId: number;
			ruleId: number;// 规则id
			ruleName: string; //规则名称
			//onSuccess将在选择结束，点击确定按钮的时候被回调
			onSuccess(data: {
				userCount: number;//选中的人数
			}): void;
			onFail(err: any): void;
		}): void;

		// 选择外部联系人
		function externalComplexPicker(options: {
			title: string;
			corpId: string;
			multiple: boolean; //是否多选  true多选，false单选，默认是单选
			limitTips: string;
			maxUsers?: number; //默认不限制
			pickedUsers: string[];  //已选，但可取消，只针对多选生效
			disabledUsers: string[]; //不可选，，只针对多选生效
			requiredUsers: string[]; //必选，只针对多选生效
			onSuccess(data: {
				emplId: string;//选人的员工id
				name: string;//员工姓名
				avatar: string;//头像url
				orgName: string;//公司名字
			}[]): void;
			onFail(err: any): void;
		}): void;
		// 编辑外部联系人
		function externalEditForm(options: {
			title: string;//标题
			corpId: string;//公司id
			emplId: string;//需要编辑的员工id，不填，则为新增外部联系人
			name: string;//需要新增的外部联系人的名字
			mobile: string;//需要预填的手机号
			companyName: string;//需要预填的公司名
			deptName: string;//预填部门名字
			job: string;//预填职位
			remark: string;//备注信息
			onSuccess(data: {
				emplId: string; //需要编辑的员工id，不填，则为新增外部联系人
				name: string; //需要新增的外部联系人的名字，emplID为空时生效
				mobile: string; //需要预填的手机号，emplID为空时生效
				companyName: string; //需要预填的公司名，emplID为空时生效
				deptName: string; //预填部门名字，emplID为空时生效
				job: string; //预填职位，emplID为空时生效
				remark: string; //备注信息，emplID为空时生效
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 自定义联系人
	namespace customContact {
		// 单选自定义联系人
		function choose(options: {
			title: string; //标题
			users: string[];//一组员工userid
			corpId: string; //加密的企业 ID，
			isShowCompanyName: boolean;   //true|false，默认为 false
			disabledUsers: string[]; //不能选的人
			onSuccess(data: {
				name: string; //姓名
				avatar: string; //头像图片url，可能为空
				emplId: string; //userid，[<font color=red>获取成员详情接口</font>](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.DHPTF8&treeId=385&articleId=106816&docType=1#s1)
			}[]): void;
			onFail(err: any): void;
		}): void;

		// 多选自定义联系人
		function multipleChoose(options: {
			title: '多选人的标题', //标题
			users: string[];//一组员工工号
			corpId: string; //企业 ID，
			isShowCompanyName: boolean;   //true|false，默认为 false
			selectedUsers: string[]; //默认选中的人，注意:已选中不可以取消
			disabledUsers: string[]; //不能选的人
			max: 10, //人数限制
			onSuccess(data: {
				name: string; //姓名
				avatar: string; //头像图片url，可能为空
				emplId: string; //工号
			}[]): void;
			onFail(err: any): void;
		}): void;
	}

	// 用户信息
	namespace user {
		function get(options: {
			onSuccess(info: {
				id: string;	// 用户唯一标识ID
				nickName: string;	// 用户名
				avatar: string;	// 用户头像地址
			}): void;
			onFail(err: any): void;
		}): void;
	}

	// 聊天页面活动视图入口
	namespace intent {
		// 获取用户选择的消息内容及会话相关的信息
		function fetchData(options: {
			onSuccess(data: {
				content: string; // 传入的消息内容
				chatId: string; // 消息来源的会话id
				chatName: string; // 消息来源的会话名称
				msgId: string; // 某条消息的消息锚点
				msgsInfo: {
					msgId: string; //消息Id
					content: string; // 消息内容
					atList: {
						userId: string; //UserID
						name: string; // 名字
					}
				}[];
			}): void;
			onFail(err: any): void;
		}): void;
	}
}

export namespace ui {
	// 输入框
	namespace input {
		function plain(options: {
			placeholder: string; //占位符
			text: string; //默认填充文本
			//onSuccess将在点击发送之后调用
			onSuccess(data: {
				text: String
			}): void;
			onFail(): void;
		}): void;
	}

	namespace progressBar {
		// 设置顶部进度条颜色
		function setColors(options: {
			colors: number[]; //array[number] 进度条变化颜色，最多支持4个颜色
			onSuccess(data: boolean): void;
			onFail(): void;
		}): void;
	}

	namespace pullToRefresh {
		// 启用下拉刷新
		function enable(options: {
			onSuccess(): void;
			onFail(): void;
		}): void;
		// 收起下拉loading
		function stop(): void;
		// 禁用下拉刷新
		function disable(): void;
	}

	namespace webViewBounce {
		// 启用iOS webview弹性效果(仅iOS支持) 0.0.5
		function enable(): void;
		// 禁用iOS webview弹性效果(仅iOS支持) 0.0.5
		function disable(): void;
	}
}