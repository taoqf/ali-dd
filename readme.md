# Use DingTalk in your typescript project.
# Installation
```sh
yarn add ali-dd
# or
(c)npm install ali-dd --save(-dev)
```

# Usage
```ts
import * as dd from 'ali-dd';
dd.config(mixin(config, {
	type: 0,
	agentId: 'xxx',
	corpId: 'xxx',
	timeStamp: 1234,
	nonceStr: 'xxx',
	signature: 'xxx',
	jsApiList: []
}));
```
