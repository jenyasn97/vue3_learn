<template >
		<form @submit.prevent >
				<h2 >Создание поста</h2 >
				<input type="text" placeholder="Название поста" v-model="title" >
				<input type="text" placeholder="Описание поста" v-model="body" >
				<button class="btn primary" @click="createPost" >Создать пост</button >
		</form >
</template >

<script setup >
import {ref, defineEmits} from "vue";

const emit = defineEmits(['create'])
const title = ref('');
const body = ref('');

function createPost () {
		if (title.value === '' || body.value === '') {
				alert('Заполните все поля')
		} else {
				const newPost = {
						title: title.value,
						body: body.value
				}
				emit('create', newPost)
				title.value = ''
				body.value = ''
				alert('Пост создан')
		}
		
}

</script >


<style scoped >


</style >