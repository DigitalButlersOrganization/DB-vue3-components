export default (story, context) => {
	const { theme } = context.globals;

	return {
		components: { story },
		template: `
			<div class="theme--${theme}">
				<story/>
			</div>
		`,
	};
};
