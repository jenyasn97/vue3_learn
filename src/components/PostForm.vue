<template >
		<form @submit.prevent >
				<h2 style="margin-bottom: 15px">Создание поста</h2 >
				<my-app-input
						:type="'text'"
						:placeholder="`Название поста`"
						v-model = "title"
				/>
				<my-app-input
						:type="'text'"
						:placeholder="`Описание поста`"
						v-model="body"
				/>
				<my-app-button
						:class="`primary`"
						@click="createPost" >Создать пост
				</my-app-button >
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
		}
		
}

</script >


<style scoped >


</style >