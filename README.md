# DOM Depth-first-search

Allows you to easily perform a depth-first-search (DFS) through DOM elements.

## Installation

Run the following command to install:

```bash
npm install dom-dfs --save
```

## Usage

First import:

```javascript
import domDFS from 'dom-dfs';
```

And then supply the initial DOM element and the condition for when a DOM element should be returned:

```javascript
domDFS(startingElement, element => element.className === 'orange');
```

## TypeScript typings

TypeScript typings are included in the project.
