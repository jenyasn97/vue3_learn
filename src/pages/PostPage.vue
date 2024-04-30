<template >
		<router-link to="/posts" >Назад к списку постов</router-link >
		<div class="post" >
				<div class="post_text" >
						<div class="id" ><strong >Номер: </strong >{{post.id}}</div >
						<div class="title" ><strong >Название: </strong >{{post.title}}</div >
						<div class="body" ><strong >Описание: </strong > {{post.body}}</div >
				</div >
		</div >
</template >

<script setup >
import {useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";

const route = useRoute()
const post = ref({})

onMounted(async () => {
		const {data} = await axios(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
		post.value = data;
});


</script >

<style scoped >

.post_text {
		margin-top: 15px;
		
}

.id {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 10px;
}

.title {
		margin-bottom: 10px;
		font-size: 28px;
}

.body {
		margin-bottom: 10px;
		font-size: 24px;
}

a {
		text-decoration: none;
		color: inherit;
		font-size: 18px;
		margin-bottom: 10px;
		margin-top: 15px;
		display: block;
		cursor: pointer;
		transition: color 0.3s ease;
		
		&:hover {
				color: teal;
		}
}


</style >