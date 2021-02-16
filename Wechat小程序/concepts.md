# 全局配置app.json  
pages: 页面    
window: 顶部状态栏  
tabBar: 底部导航栏->pagePath导航  
  
# 标签
<view>类似div  
<text>文本  
<image>图片  
  
# 跳转
<view bindTap="clickXX"></view>  
clickXX:function(){  
    wx.navigateTo({  
        url:"..."  
    })  
}  
要接受参数则再onLoad函数中接收  
  
# 数据绑定  
data:{xx:"123"}  
this.setData({xx:"456"})  
  
# 获取用户信息  
wx.getUserInfo(...)  
  
# 手动授权  
wx.openSetting({...})  
  
# for  
<view wx:for="{{dataList}}"></view>  
  
# 双向绑定  
<input bindinput="bindTxt"></input>  
bindTxt:function(e){...}  
  
# 后端验证  
wx.request({...})  
  
# 弹窗  
wx.showToast({...})  
  
# 全局数据  
app.globalData.xx  

# 本地存储  
wx.setStorageSync({...})  
wx.getStorageSync({...})  
  
# 页面传值  
父->子: url传值，子页面onload中接受(e.currentTarget.dataset.xx)  
子->父(设置父页面对象的值): getCurrentPages()[pages.length-2].setData({...})  