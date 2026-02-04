import rootConfig from '../../eslint.config.js'

// Override tsconfigRootDir for this specific project
export default rootConfig.map((config) => {
	if (config.languageOptions?.parserOptions?.tsconfigRootDir !== undefined) {
		return {
			...config,
			languageOptions: {
				...config.languageOptions,
				parserOptions: {
					...config.languageOptions.parserOptions,
					tsconfigRootDir: new URL('.', import.meta.url).pathname.replace(/^\/$/, ''),
				},
			},
		}
	}
	return config
})
