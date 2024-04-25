<template >
		<div class="post" :class="post.done ? 'done' : ''" >
				<div >
						<div ><strong >Название: </strong >{{post.title}}</div >
						<div ><strong >Описание: </strong > {{post.body}}</div >
				</div >
				<div >
						<button class="btn primary" @click="$emit('donePost', post.id)" >Готово</button >
						<button class="btn danger" @click="$emit('removePost', post.id)" >Удалить</button >
				</div >
		</div >
</template >

<script setup >

const {post} = defineProps({
		post: {
				type: Object,
				required: true
		}
})

</script >

<style scoped >


</style >