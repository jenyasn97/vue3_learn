<template >
		<div class="post" :class="post.done ? 'done' : ''" >
				<div class="post_text">
						<div ><strong >Название: </strong >{{post.title}}</div >
						<div ><strong >Описание: </strong > {{post.body}}</div >
				</div >
				<div >
						<my-app-button :class="`primary`" @click="$emit('donePost', post.id)" >Готово</my-app-button >
						<my-app-button :class="`danger`" @click="$emit('removePost', post.id)" >Удалить</my-app-button >
				</div >
		</div >
</template >

<script setup >
import {defineProps} from "vue";

const {post} = defineProps({
		post: {
				type: Object,
				required: true
		}
})

</script >

<style scoped >
.post_text{
		width: 70%;
}

</style >