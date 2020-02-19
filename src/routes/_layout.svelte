<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<!--<Nav {segment}/>-->

<main>
	<slot></slot>
</main>
<footer class="footer">
	<div class="content has-text-centered">
		<p>
			Copyright &copy; 2020  Dibumi.Com <br>
			Dibuat dengan <span class="has-text-danger has-text-weight-bold"><i class="fas fa-heart"></i></span> di Indonesia (Lamongan & Surabaya)
		</p>
	</div>
</footer>
