<template >
				<input class="input"  :type="type" :placeholder="placeholder"
				:value="modelValue" @input="$emit('update:modelValue',
				$event.target.value)">
</template >

<script >
export default {
		name: 'my-app-input',
		data() {
				return {}
		},
		props: {
				type: {
						type: String,
						required: true
				},
				placeholder: {
						type: String,
						required: true
				},
				modelValue: {
						type: String,
						required: true
				}
		}
}



</script >

<style scoped >

.input {
		padding: 10px 15px;
		border: 1px solid teal;
		outline: none;
		border-radius: 5px;
}

</style >