<script>
	let form = {
		name: '',
		email: '',
		message: ''
	};

	// function handleSubmit() {
	// 	alert("Thank you for reaching out! We'll get back to you soon.");
	// }
</script>

<div class="mx-auto max-w-7xl w-full">
	<h1 class="mb-4 text-3xl font-bold text-white">Contact</h1>

	<form
		// on:submit|preventDefault={handleSubmit}
		class="space-y-4 rounded-lg bg-white/30 p-6 shadow backdrop-blur-md"
	>
		<div>
			<label for="name" class="block text-sm font-medium text-gray-300">Name:</label>
			<input
				id="name"
				bind:value={form.name}
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			/>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-gray-300">Email:</label>
			<input
				id="email"
				type="email"
				bind:value={form.email}
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			/>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-300">Message:</label>
			<textarea
				id="message"
				bind:value={form.message}
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Send</button
		>
	</form>
</div>
