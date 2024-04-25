<template >
		<div >
				<h3 >Список постов</h3 >
				<the-filter :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"></the-filter >
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
import TheFilter from "../ui/TheFilter.vue";
import {defineProps, computed} from "vue";

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

//
// const findTitle = computed({get() {return modelValue}, set() {}})

</script >

<style scoped >


</style >