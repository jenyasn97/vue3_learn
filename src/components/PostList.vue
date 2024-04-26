<template >
		<div >
				<h3 >Список постов</h3 >
				<my-app-input :type="'text'"
																		:placeholder="'Поиск поста'"
																		:model-value="modelValue"
																		@update:modelValue="$emit('update:modelValue', $event)">
				</my-app-input >
				<span v-if="!posts.length" >Постов не найдено</span >
				<PostItem v-for="post in posts" :key="post.id"
														:post="post"
														@remove-post="$emit('removePost', post.id)"
														@done-post="$emit('donePost', post.id)"
				/>
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
		}
})
</script >

<style scoped >


</style >