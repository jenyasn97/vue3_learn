<template >
		<div >
				<h3 >Список постов</h3 >
				<the-filter @findTitle="$emit('findTitle', $event)" ></the-filter >
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
import {defineProps} from "vue";

const {posts} = defineProps({
		posts: {
				type: Array,
				required: true
		}
})

</script >

<style scoped >


</style >