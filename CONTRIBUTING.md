# Guía de Contribución - Formacion-iAR

Este documento describe los estándares de código y procesos que deben seguirse al contribuir a este repositorio.

## Estándares de Código

Todos los proyectos en este repositorio deben cumplir con los siguientes estándares:

### 1. Linting (ESLint)

Se utiliza ESLint para mantener la consistencia del código y detectar errores potenciales.

```bash
# Verificar linting
npm run lint

# Arreglar problemas automáticamente
npm run lint:fix
```

**Reglas principales:**

- TypeScript strict mode habilitado
- Sin `console.log` en código de producción (solo `warn` y `error`)
- Tipado explícito en funciones
- Sin `any` types (usar generics o uniones)
- Manejo correcto de promesas

### 2. Formato de Código (Prettier)

Se utiliza Prettier para formateo automático de código.

```bash
# Verificar formato
npm run format:check

# Aplicar formato
npm run format
```

**Configuración:**

- Indentación: 2 espacios
- Comillas simples
- Sin punto y coma (excepto donde es necesario)
- Línea máxima: 100 caracteres

### 3. Verificación de Tipos (TypeScript)

Todo el código debe pasar la verificación de tipos de TypeScript.

```bash
# Verificar tipos
npm run type-check
```

### 4. Validación Completa

Antes de hacer commit, ejecutar:

```bash
npm run validate
```

Esto ejecutará:

1. Verificación de formato (Prettier)
2. Linting (ESLint)
3. Verificación de tipos (TypeScript)

## Estructura de Proyectos

Cada proyecto dentro del repositorio debe seguir esta estructura:

```
proyecto-nombre/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json (solo dependencias específicas del proyecto)
├── tsconfig.json (extender del tsconfig.json raíz)
├── tsconfig.app.json (heredar de tsconfig.json del proyecto)
├── README.md
└── .gitignore
```

## Crear un Nuevo Proyecto

Para agregar un nuevo proyecto al repositorio:

1. **Crear la carpeta del proyecto**:

   ```bash
   mkdir proyecto-nombre
   cd proyecto-nombre
   ```

2. **Crear la estructura base**:

   ```bash
   mkdir -p src/{components,pages,hooks,utils,types} public
   ```

3. **Crear `tsconfig.json` en la carpeta del proyecto**:

   ```json
   {
   	"extends": "../tsconfig.json",
   	"compilerOptions": {
   		"composite": true
   	},
   	"include": ["src"]
   }
   ```

4. **Crear `tsconfig.app.json`** (si es necesario, ej: para Vite):

   ```json
   {
   	"extends": "./tsconfig.json",
   	"compilerOptions": {
   		"composite": true,
   		"jsx": "react-jsx",
   		"noEmit": true
   	},
   	"include": ["src"]
   }
   ```

5. **Crear `package.json` con dependencias del proyecto** (ejemplo):

   ```json
   {
   	"name": "proyecto-nombre",
   	"private": true,
   	"version": "0.0.0",
   	"type": "module",
   	"scripts": {
   		"dev": "vite",
   		"build": "tsc -b && vite build",
   		"preview": "vite preview"
   	},
   	"dependencies": {
   		"react": "^19.2.0",
   		"react-dom": "^19.2.0"
   	},
   	"devDependencies": {
   		"@vitejs/plugin-react": "^5.1.1",
   		"vite": "^7.2.4"
   	}
   }
   ```

6. **Instalar dependencias**:
   ```bash
   bun install
   ```

Todos los linters (ESLint, Prettier, TypeScript) se aplicarán automáticamente al nuevo proyecto. **No es necesario actualizar el tsconfig.json raíz**, ya que captura automáticamente todos los proyectos con el patrón `*/src/**/*.ts`.

## Flujo de Trabajo

1. **Crear rama**: `git checkout -b feature/descripcion`
2. **Desarrollar**: Hacer cambios en el código
3. **Validar**: `npm run validate` (desde la raíz)
4. **Arreglar si es necesario**: `npm run lint:fix && npm run format`
5. **Commit**: Con mensaje descriptivo
6. **Push**: A la rama de feature
7. **Pull Request**: Crear PR con descripción clara

## Reglas de Linting Específicas

### TypeScript

- Funciones deben tener tipos de retorno explícitos
- Evitar `any` types
- Usar `unknown` en lugar de `any`
- Parámetros no utilizados deben empezar con `_`

### React

- Solo exportar componentes (regla react-refresh)
- Usar hooks de forma correcta (eslint-plugin-react-hooks)
- Preferir componentes funcionales
- Usar TypeScript para props

### General

- Variables deben ser `const` por defecto
- No usar `var`
- Usar estricta igualdad (`===` excepto con `null`)
- Bloques de código entre llaves `{}`

## Configuración Local

Para mantener la consistencia, se recomienda:

### VS Code

Instalar extensiones:

- ESLint
- Prettier - Code formatter
- EditorConfig for VS Code

Configuración recomendada en `.vscode/settings.json`:

```json
{
	"editor.formatOnSave": true,
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

## Soporte

Si tienes preguntas sobre los estándares o necesitas excepciones, contacta al equipo de desarrollo.
