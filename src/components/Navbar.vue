<template >
		<div class="navbar" >
				<my-app-button @click="$router.push('/')" >На главную</my-app-button >
				<my-app-button @click="$router.push('/posts')" >Посты</my-app-button >
				<my-app-button @click="$router.push('/about')" >About</my-app-button >
		</div >
</template >

<script >


export default {
		name: "Navbar",
}

</script >


<style scoped >

.navbar {
		height: 50px;
		background-color: teal;
		box-shadow: 2px 2px 4px gray;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 15px;
}

</style >