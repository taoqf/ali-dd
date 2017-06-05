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
	}

	namespace ding {

	}
}
