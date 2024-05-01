<template >
		<h1 style="margin-bottom: 15px" >Страница с постами</h1 >
		<div class="app_btns" >
				<my-app-button class="primary" @click="showDialog" >Создать пост</my-app-button >
				<my-app-select
						:modelValue="selectedSort"
						@update:modelValue="selectedSort = $event"
						:options="sortOptions" ></my-app-select >
		</div >
		
		<my-app-dialog
				v-model:show="dialogVisible" >
				<post-form @create="createPost" />
		</my-app-dialog >
		
		<post-list
				v-model="findTitle"
				:posts="filteredPosts"
				:onLoading="onLoading"
				@update:modelValue="filterPosts"
				@remove-post="removePost"
				@done-post="donePost"
				@open-post="$router.push(`/posts/${$event}`)"
		/>
		<div v-intersection="loadMorePosts" class="observer" ></div >
		
		<!--		<div class="page__wrapper" >-->
		<!--				<div-->
		<!--						v-for="pageNumber in totalPages"-->
		<!--						:key="pageNumber"-->
		<!--						class="page"-->
		<!--						:class="{page__current: page === pageNumber}"-->
		<!--						@click="changePage( pageNumber )"-->
		<!--				>-->
		<!--						{{pageNumber}}-->
		<!--				</div >-->
		<!--		</div >-->

</template >

<script setup >
import {computed, onMounted, ref, watch} from 'vue';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import axios from "axios";
import {useRouter} from 'vue-router';

const router = useRouter();


const posts = ref([])
const findTitle = ref('');
const dialogVisible = ref(false);
const onLoading = ref(true)
const selectedSort = ref('')
const sortOptions = ref([
		{value: 'title', name: 'По названию'},
		{value: 'body', name: 'По содержимому'}
])
const page = ref(1)
const limit = ref(5)
const totalPages = ref(0)

const createPost = (post) => {
		posts.value.push({id: posts.value.length + 1, ...post});
		dialogVisible.value = false
}

const filteredPosts = computed(() => {
		return posts.value.filter(post =>
				post.title.toLowerCase().includes(findTitle.value.toLowerCase())
		);
});

function filterPosts (searchTerm) {
		findTitle.value = searchTerm;
}

function removePost (id) {
		posts.value = posts.value.filter(post => post.id !== id)
}

function donePost (id) {
		posts.value = posts.value.map(post => {
				if (post.id === id) {
						post.done = !post.done
				}
				return post
		})
}


function showDialog () {
		dialogVisible.value = true
}

async function fetchPosts () {
		try {
				onLoading.value = true
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
								_page: page.value,
								_limit: limit.value
						}
				})
				totalPages.value = Math.ceil(response.headers['x-total-count'] / limit.value)
				posts.value = response.data;
		} catch (e) {
				alert(`Ошибка`)
		} finally {
				onLoading.value = false
		}
}

async function loadMorePosts () {
		try {
				page.value += 1
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
								_page: page.value,
								_limit: limit.value
						}
				})
				totalPages.value = Math.ceil(response.headers['x-total-count'] / limit.value)
				posts.value = [...posts.value, ...response.data];
		} catch (e) {
				alert(`Ошибка`)
		}
}

//функция переключения страниц
// function changePage (pageNumber) {
// 		page.value = pageNumber
// }


onMounted(() => {
				fetchPosts()
		}
)


// const sortedPosts = computed(() => {
// 		return [...posts.value].sort((post1, post2) => {
// 				return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
// 		})
// })
//
// watch(page, () => {
// 		fetchPosts()
// })

watch(selectedSort, (newValue) => {
		posts.value.sort((post1, post2) => {
				return post1[newValue]?.localeCompare(post2[newValue])
		})
})


</script >


<style >

</style >