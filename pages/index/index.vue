<template>
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<view>
			<text class="title">基本信息</text>
			<uni-list>
			    <uni-list-item title="姓名" rightText="xxx" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="性别" rightText="x" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="居住地" rightText="xx" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="工作时间" rightText="xxx" :show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
		<view>
			<text class="title">联系方式(<text style="color: red;">点击可复制</text>)</text>
			<uni-list>
			    <uni-list-item title="手机号码" rightText="xxxxxxxxxxx" @click="phone" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="微信" rightText="xxxxx" @click="weixin" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="邮箱" rightText="xxxx.com" @click="mail" :show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
		<view v-if="isH5">
			<text class="title">小站地址</text>
			<uni-list>
			    <uni-list-item title="github" rightText="点击前往" @click="gogithub" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="简书" rightText="点击前往" @click="gojianshu" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="知乎" rightText="点击前往" @click="gozhihu" :show-arrow="false"></uni-list-item>
				<uni-list-item title="个人博客" rightText="点击前往" @click="goboke" :show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {uniCard,uniListItem,uniList},
		data() {
			return {
				title: 'Hello',
				isH5: false
			}
		},
		onLoad() {
			// #ifdef H5
			this.isH5 = true
			// #endif
		},
		methods: {
			phone() {
				uni.setClipboardData({ data:'xxxxxxxxxxx', success:function(data){
					uni.showToast({
					    title: '复制成功',
					    duration: 2000
					});
				}, fail:function(err){
					uni.showToast({
					    title: '复制失败',
					    duration: 2000
					});
				}, complete:function(res){
					
				} })
			},
			weixin() {
				uni.setClipboardData({ data:'xxxxx', success:function(data){
					uni.showToast({
					    title: '复制成功',
					    duration: 2000
					});
				}, fail:function(err){
					uni.showToast({
					    title: '复制失败',
					    duration: 2000
					});
				}, complete:function(res){
					
				} })
			},
			mail() {
				uni.setClipboardData({ data:'xxxx.com', success:function(data){
					uni.showToast({
					    title: '复制成功',
					    duration: 2000
					});
				}, fail:function(err){
					uni.showToast({
					    title: '复制失败',
					    duration: 2000
					});
				}, complete:function(res){
					
				} })
			},
			gogithub() {
				window.location.href = 'https://xxxx'
			},
			gojianshu() {
				window.location.href = 'https://xxxx'
			},
			gozhihu() {
				window.location.href = 'https://xxxxx'
			},
			goboke() {
				window.location.href = 'https://xxxx'
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		margin: 10rpx;
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
