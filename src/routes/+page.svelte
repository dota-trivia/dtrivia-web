<script>
	import { t } from '$lib/translations'
	import { page } from '$app/stores'
	import { toast } from 'svelte-sonner'
	import { Button } from '$lib/components/ui/button'
	import { signIn, signOut } from '@auth/sveltekit/client'
</script>

<h1>SvelteKit Auth Example</h1>

<Button on:click={() => toast('nice')}>
	Hello {$t('common.hello')}
</Button>

<p>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</p>
