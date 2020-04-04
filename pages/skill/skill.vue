<template>
	<view>
		<view>
			<view style="border-bottom: 1rpx solid #8F8F94;">
				<text :class="[{show : isactive1},{title : isactive2}]" @click="clickD" style="margin-left:50rpx">技能描述</text>
				<text :class="[{show : isactive2},{title : isactive1}]" @click="clickP" style="margin-left: 300rpx;">技能熟悉程度</text>
			</view>
			<view v-show="showD" style="margin-top:30rpx">
				<view class="content">1.自己发挥</view>
				<view class="content">2.自己发挥</view>
				<view class="content">3.自己发挥</view>
				<view class="content">4.自己发挥</view>
				<view class="content">5.自己发挥</view>
				<view class="content">6.自己发挥</view>
				<view class="content">7.自己发挥</view>
				<view class="content">8.自己发挥</view>
				<view class="content">9.自己发挥</view>
				<view class="content">10.自己发挥</view>
			</view>
		</view>
		<view style="margin-top:30rpx" v-show="showP">
			<view class="contentC">
				JavaScript
			</view>
			<view class="contentC">
				<progress percent="85"></progress>
			</view>
			<view class="contentC">
				HTML
			</view>
			<view class="contentC">
				<progress percent="90"></progress>
			</view>
			<view class="contentC">
				CSS
			</view>
			<view class="contentC">
				<progress percent="75"></progress>
			</view>
			<view class="contentC">
				Python
			</view>
			<view class="contentC">
				<progress percent="60"></progress>
			</view>
			<view class="contentC">
				ES6+
			</view>
			<view class="contentC">
				<progress percent="65"></progress>
			</view>
			<view class="contentC">
				Vue
			</view>
			<view class="contentC">
				<progress percent="90"></progress>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showD:false,
				showP:false,
				isactive1: false,
				isactive2: false,
			}
		},
		onLoad() {
			this.clickD()
		},
		methods: {
			clickD() {
				this.showD = true
				this.showP = false
				this.isactive1 = true
				this.isactive2 = false
			},
			clickP() {
				this.showD = false
				this.showP = true
				this.isactive1 = false
				this.isactive2 = true
			}
			
		}
	}
</script>

<style>
	.contentC {
		margin-left:15rpx;
		font-size:34rpx;
		color: #8f8f94;
	}
	.content {
		margin:15rpx;
		font-size:38rpx;
		color: #8f8f94;
	}
	.title {
		margin: 20rpx;
		font-size: 36rpx;
		color: #555555;
	}
	.show {
		border-bottom: 10rpx solid #4CD964;
		color: #4CD964;
	}
</style>
