# GitHub Copilot Anweisungen für boilerplate.ts

## Projektkontext

Dies ist ein Svelte + TypeScript Boilerplate-Projekt mit folgender Struktur:

- **Framework**: SvelteKit
- **Sprache**: TypeScript
- **Styling**: SCSS
- **Build Tool**: Vite
- **Hauptordner**:
  - `src/lib/boilerplate/` - Wiederverwendbare Komponenten und Utilities
  - `src/routes/` - SvelteKit Routen
  - `src/lib/styles/` - Globale Styles und SCSS Mixins

## Code-Konventionen

### TypeScript

- Verwende immer TypeScript mit expliziten Typen
- Props in Svelte-Komponenten mit `interface` definieren
- Nutze `type` für Unions und Aliases

### Svelte-Komponenten

- Komponenten in `src/lib/boilerplate/components/`
- Dateinamen: PascalCase (z.B. `MyComponent.svelte`)
- Props destructuring verwenden: `let { propName }: Props = $props()`
- Svelte 5 Runes verwenden ($props, $state, $derived, $effect)

### Styling

- SCSS verwenden, nicht plain CSS
- Styles in `src/lib/styles/` für globale Definitionen
- Komponenten-spezifische Styles in `<style lang="scss">` Block
- Mixins aus `src/lib/styles/mixins.scss` importieren und nutzen
- Farben aus `src/lib/styles/colors.scss` verwenden

### File Organization

- Neue Komponenten: `src/lib/boilerplate/components/[Name].svelte`
- Utilities: `src/lib/boilerplate/utils/`
- Actions: `src/lib/boilerplate/actions/`
- Types: `src/lib/boilerplate/boilerplate.d.ts`

## Bevorzugte Patterns

### Svelte 5 Runes (nicht Legacy API)

```svelte
<script lang="ts">
	interface Props {
		title: string
		count?: number
	}

	let { title, count = 0 }: Props = $props()
	let doubled = $derived(count * 2)
</script>
```

### SCSS Imports

```scss
@use '../styles/mixins' as *;
@use '../styles/colors' as *;
```

### TypeScript Imports

```typescript
import type { ComponentType } from 'svelte'
import { someFn } from '$lib/boilerplate/utils/helpers'
```

## Was zu vermeiden ist

- ❌ Svelte 4 Syntax (export let, $:, etc.)
- ❌ Inline Styles statt SCSS
- ❌ Any-Types
- ❌ JavaScript statt TypeScript
- ❌ Veraltete SvelteKit APIs

## Projektspezifische Hinweise

- Legacy Peer Dependencies verwenden: `npm install --legacy-peer-deps`
- Build Output: `htdocs/` Ordner
- Beispiel-Routen unter `src/routes/(examples)/`
- Config in `src/lib/app.config.js`

## Code-Generierung Präferenzen

1. Vollständige TypeScript-Typen
2. Moderne Svelte 5 Syntax
3. SCSS für Styling
4. Wiederverwendbare, modulare Komponenten
5. Klare, deutsche Kommentare für komplexe Logik
6. Accessibility berücksichtigen (ARIA, semantisches HTML)
