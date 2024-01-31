<script>
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner'
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

	const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
	<Toaster/>
	<slot />
</QueryClientProvider>
