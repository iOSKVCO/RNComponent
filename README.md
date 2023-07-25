# RNComponent

# 下包
先yarn install 再 pod install

# 列出可用设备列表
xcrun simctl list devices

# 选择要使用的设备（模拟器）
yarn ios --simulator "iPhone 12"

yarn ios --simulator "iPhone 14 Pro Max"

yarn ios --udid xxxxxxx

#  安装打包模块
npm install -g exp

# 开始打包
# 打包  android 
exp build:android

# 打包  ios 
exp build:ios

How would you like to upload your credentials?
你想如何上传证书
Expo handles all credentials, you can still provide overrides 
Expo帮你处理

### 预览
<img src="https://user-images.githubusercontent.com/54516653/130834417-30731687-70c9-4b98-bba0-bf763e92e3f7.png" alt="1" width="350px" height="700px" />
<img src="https://user-images.githubusercontent.com/54516653/130834445-729a4a2a-770a-4b8e-b49b-4a06cac367b9.png" alt="2" width="350px" height="700px" />
