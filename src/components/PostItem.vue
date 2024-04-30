<template >
		<div class="post" :class="post.done ? 'done' : ''" @click="$emit('openPost', post.id)" >
				<div class="post_text" >
						<div ><strong >Номер: </strong >{{post.id}}</div >
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

const {post} = defineProps({
		post: {
				type: Object,
				required: true
		}
})

</script >

<style scoped >
.post_text {
		width: 70%;
}

</style >