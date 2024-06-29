import { defineSemanticTokens } from '@pandacss/dev'
import type { PresetOptions } from '../../types'
import { colors } from './colors'
import { createRadiiTokens } from './radii'
import { shadows } from './shadows'

export const createSemanticTokens = (options: PresetOptions) => {
  const {
    accentColor = 'neutral',
    additionalColors = [],
    borderRadius = 'sm',
    grayColor = 'neutral',
  } = options

  const availableColors = [grayColor, accentColor, ...additionalColors]
  const extraColors = Object.fromEntries(
    Object.entries(colors).filter(
      ([color]) => availableColors.includes('*') || availableColors.includes(color),
    ),
  )

  return defineSemanticTokens({
    colors: {
      ...extraColors,
      gray: colors[grayColor],
      accent: colors[accentColor],
      bg: {
        canvas: {
          value: { base: 'oklch(99.24% 0.008 266)', _dark: 'oklch(18.68% 0.01 266)' },
        },
        default: { value: { base: 'white', _dark: '{colors.gray.2}' } },
        subtle: { value: { base: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
        muted: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
        emphasized: { value: { base: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
        disabled: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
      },
      fg: {
        default: { value: '{colors.gray.12}' },
        muted: { value: '{colors.gray.11}' },
        subtle: { value: '{colors.gray.10}' },
        disabled: { value: '{colors.gray.7}' },
      },
      border: {
        default: { value: '{colors.gray.7}' },
        muted: { value: '{colors.gray.6}' },
        subtle: { value: '{colors.gray.4}' },
        disabled: { value: '{colors.gray.5}' },
        outline: { value: '{colors.gray.a9}' },
      },
      accents: {
        value: {
          base: '{colors.bluePalette.9}',
          _dark: '{colors.bluePalette.8}',
        },
      },
      background: {
        value: {
          base: '{colors.grayPalette.1}',
          _dark: '{colors.grayPalette.1}',
        },
      },
      header: {
        value: {
          base: 'oklch(from oklch(99.24% 0.008 266) l c h / 40%)',
          _dark: 'oklch(from oklch(18.68% 0.01 266) l c h / 40%)',
        },
      },
      emphasis: {
        value: {
          base: 'oklch(from oklch(55.52% 0.223 266) l c h / 5%)',
          _dark: 'oklch(from oklch(64.6% 0.172 266) l c h / 7%)',
        },
      },
      foreground: {
        value: {
          base: 'oklch(from oklch(98.08% 0.008 266) l c h / 100%)',
          _dark: '{colors.grayPalette.3}',
        },
      },
      danger: {
        default: {
          value: {
            base: '{colors.redPalette.9}',
            _dark: '{colors.redPalette.10}',
          },
        },
        emphasis: {
          value: {
            base: 'oklch(from oklch(74.19% 0.138 22) l c h / 10%)',
            _dark: 'oklch(from oklch(64.51% 0.204 22) l c h / 10%)',
          },
        },
      },
      warning: {
        default: {
          value: {
            base: '{colors.orangePalette.11}',
            _dark: '{colors.orangePalette.10}',
          },
        },
        emphasis: {
          value: {
            base: 'oklch(from oklch(54.63% 0.140 60) l c h / 7%)',
            _dark: 'oklch(from oklch(76.91% 0.165 60) l c h / 10%)',
          },
        },
      },
      success: {
        default: {
          value: {
            base: '{colors.greenPalette.11}',
            _dark: '{colors.greenPalette.9}',
          },
        },
        emphasis: {
          value: {
            base: 'oklch(from oklch(88.54% 0.19 170) l c h / 10%)',
            _dark: 'oklch(from oklch(86.02% 0.176 170) l c h / 10%)',
          },
        },
      },
      text: {
        default: {
          value: {
            base: '{colors.grayPalette.12}',
            _dark: '{colors.grayPalette.4}',
          },
        },
        secondary: {
          value: {
            base: '{colors.grayPalette.11}',
            _dark: '{colors.grayPalette.11}',
          },
        },
        tertiary: {
          value: {
            base: '{colors.grayPalette.10}',
            _dark: '{colors.grayPalette.10}',
          },
        },
      },
      borderColor: {
        value: {
          base: '{colors.grayPalette.4}',
          _dark: '{colors.grayPalette.4}',
        },
      },
      cardBackgroundColor: {
        value: {
          base: '{colors.grayPalette.2}',
          _dark: '{colors.grayPalette.3}',
        },
      },
      input: {
        active: {
          value: {
            base: '{colors.bluePalette.9}',
            _dark: '{colors.bluePalette.8}',
          },
        },
        background: { value: { base: '{colors.grayPalette.0}', _dark: '{colors.grayPalette.0}' } },
        disabled: {
          value: { base: '{colors.grayPalette.3}', _dark: '{colors.grayPalette.7}' },
        },
        border: {
          value: { base: '{colors.grayPalette.5}', _dark: '{colors.grayPalette.6}' },
        },
        focus: { value: { base: '{colors.bluePalette.8}', _dark: '{colors.bluePalette.9}' } },
      },
      shadowColor: {
        value: {
          base: 'var(--local-shadow-color, 223deg 5% 80%)',
          _dark: 'var(--local-shadow-color, 223deg 5% 1%)',
        },
      },
      snippet: {
        value: {
          base: '{colors.grayPalette.2}',
          _dark: '{colors.grayPalette.3}',
        },
      },
      token: {
        comment: {
          value: {
            base: '{colors.grayPalette.10}',
            _dark: '{colors.grayPalette.10}',
          },
        },
        selector: { value: { base: '{colors.bluePalette.9}', _dark: '{colors.bluePalette.6}' } },
        symbol: {
          value: { base: '{colors.bluePalette.11}', _dark: '{colors.bluePalette.8}' },
        },
        operator: {
          value: { base: '{colors.grayPalette.10}', _dark: '{colors.orangePalette.12}' },
        },
        keyword: {
          value: { base: '{colors.bluePalette.10}', _dark: '{colors.bluePalette.7}' },
        },
        function: {
          value: { base: '{colors.pinkPalette.10}', _dark: '{colors.pinkPalette.4}' },
        },
        punctuation: {
          value: { base: '{colors.bluePalette.9}', _dark: '{colors.bluePalette.6}' },
        },
      },
    },
    shadows,
    radii: createRadiiTokens(borderRadius),
  })
}
