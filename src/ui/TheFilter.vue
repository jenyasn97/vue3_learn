<template >
		<div >
				<input type="text" placeholder="Поиск поста по названию" v-model="findTitle" @input="startFilter" >
		</div >
</template >

<script setup >

import {ref} from "vue";

const findTitle = ref('');
const emit = defineEmits(['findTitle'])

function startFilter () {
		emit('findTitle', findTitle.value)
}


</script >

<style scoped >

</style >