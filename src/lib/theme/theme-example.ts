import { colors } from "./tokens";

export const lightTheme = {
	colors: {
		bg: {
			calm: {
				section: colors.white,
				global: colors.white,
				disabled: colors.neutral[300],
			},
		},

		text: {
			calm: {
				main: colors.neutral[900],
			},
			loud: {
				main: colors.neutral[800],
				secondary: colors.neutral[500],
				disabled: colors.neutral[300],
			},
		},
	},

	spacing: {},

	shadows: {},

	typography: {},

	cornerRadius: {},

	zIndices: {},

	animation: {
		base: `0.2s ease-in-out`,
	},
};

export const darkTheme = {
	...lightTheme,
	colors: {
		bg: {
			calm: {
				section: colors.black,
				global: colors.neutral[900],
				disabled: colors.neutral[600],
			},
		},

		text: {
			calm: {
				main: colors.neutral[700],
			},
			loud: {
				main: colors.neutral[100],
				secondary: colors.neutral[300],
				disabled: colors.neutral[500],
			},
		},
	},
};
