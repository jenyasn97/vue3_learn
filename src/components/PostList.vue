<template >
		<div >
				<h3 >Список постов</h3 >
				<my-app-input
						:type="'text'"
						:placeholder="'Поиск поста'"
						style="margin-top: 15px"
						:model-value="modelValue"
						@update:modelValue="$emit('update:modelValue', $event)"
				>
				</my-app-input >
				<div style="margin-top: 15px; font-size: 24px" v-if="onLoading" >Загрузка...........</div >
				<span v-else-if="!posts.length" >Постов не найдено</span >
				<transition-group name="post-list" >
						<PostItem v-for="post in posts" :key="post.id"
																:post="post"
																@remove-post="$emit('removePost', post.id)"
																@done-post="$emit('donePost', post.id)"
						/>
				</transition-group >
		
		</div >
</template >

<script setup >
import PostItem from "./PostItem.vue";
import {defineProps} from "vue";

const {posts, modelValue} = defineProps({
		posts: {
				type: Array,
				required: true
		},
		modelValue: {
				type: String,
				required: true
		},
		onLoading: {
				type: Boolean
		}
})
</script >

<style scoped >

.post-list-item {
		display: inline-block;
		margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
		transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
		opacity: 0;
		transform: translateX(130px);
}

.post-list-move {
		transition: transform 0.5s ease;
}


</style >