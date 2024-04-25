<template >
		<div >
				<input type="text" placeholder="Поиск поста по названию" v-model="findTitle" @input="$emit('update:modelValue', $event.target.value)" >
		</div >
</template >

<script setup >
import {defineProps, defineEmits, computed} from "vue";

const props = defineProps({
		modelValue: {
				type: String,
				required: true
		}
})

const findTitle = computed({
		get() {
				return props.modelValue
		},
		set(value) {
				emit('update:modelValue', value)
		}
		
})

const emit = defineEmits(['update:modelValue'])



</script >

<style scoped >

</style >