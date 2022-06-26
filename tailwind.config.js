// Should extend the style to use built in classes with our own
module.exports = {
	theme: {
		plugins: [],
		colors: {
			current: `currentColor`,
			white: `#FFFFFF`,
			black: `#000000`,
			transparent: `transparent`,
      grey: {
        light: `#F4F6F8`,
        default: `#9DAEC2`,
        dark: `#6E8098`,
      },
      violet: {
        light: `#939BF4`,
        default: `#9E7F66`,
      },
      blue: {
        dark: `#19202D`,
        midnight: `#121721`,
      }
		},
		fontSize: {
      "sm": [`14px`, `18px`],
      "base": [`16px`, `26px`],
      "lg": [`20px`, `24px`],
      "xl": [`24px`, `29px`],
      "2xl": [`28px`, `34px`],
		},
		fontFamily: {
			display: [`Kumbh Sans`],
		},
	},
};
