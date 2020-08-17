# Learn the basis

This is a mockup with setup examples to get started or getting the grasp of the original Stellaris repository.

## Why should you check this? 🤔

This is a great tool for new contributors, to help them get the basic understanding on how the Stellaris-UI library works, from:
- [Tooling]()
- [Ecosystem]()
- [File structure]()
- [Rollup config]()
- [Code splitting]()

## Tooling 🛠
All the tooling used in the ``package.json``

```
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@babel/core": "^7.11.1",
    "@rollup/plugin-commonjs": "^14.0.0",
    "@rollup/plugin-node-resolve": "^8.4.0",
    "@storybook/react": "^6.0.10",
    "@testing-library/jest-dom": "^5.11.3",
    "@testing-library/react": "^10.4.8",
    "@types/jest": "^26.0.10",
    "@types/react": "^16.9.46",
    "babel-loader": "^8.1.0",
    "babel-preset-react-app": "^9.1.2",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^26.4.0",
    "node-sass": "^4.14.1",
    "rollup": "^2.23.1",
    "rollup-plugin-peer-deps-external": "^2.2.3",
    "rollup-plugin-postcss": "^3.1.5",
    "rollup-plugin-typescript2": "^0.27.2",
    "sass-loader": "^9.0.3",
    "ts-jest": "^26.2.0",
    "typescript": "^3.9.7"
  },
```

## Ecosystem ♻

- Architecture:
  - TypeScript / .tsx
  - Babel
- Testing:
  - Jest / ts-jest
  - React Testing Library
- Styling:
  - CSS / SCSS
- Bundling
  - Rollup
- Docs
  - StoryBook
  
## File structure 📂

```
.storybook/
node_modules/
build/
src/
jest.config.js
jest.setup.ts
LICENSE
README.md
rollup.config.js
package.json
tsconfig.json
yarn.lock
```

## Rollup config 📦

## Code splitting 🗃

## License

MIT
