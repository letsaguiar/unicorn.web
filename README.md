<h1 align="center">
	<img src="https://i.ibb.co/XSRKDcM/cat.png" width="100" />
	<br>unicorn.web
</h1>
<h3 align="center">Unleash the magic of web development!</h3>

## 📖 Table of Contents
- [📍 Overview](#-overview)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📍 Overview
Unicorn-web is a bun based web framework which makes the process of creating a web application much simpler. It provides core HTTP entities to simplify and standardize the HTTP requests handling operations by offering a convenient way to setup a server, define routes and extract relevant information from the requests. It aims to be a fast, highly customizable and scalable web framework that helps you in your daily tasks, providing common functionality abstractions, improve code readability and maintainability. 

---

## 🚀 Getting Started

### 🔧 Installation

```sh
bun add unicorn.web
```

### 🤖 Building your first unicorn.app

Let's create your first unicorn.app

1. Open your `index.ts` and creates a new server instance:
```ts
import { UnicornServer } from 'unicorn.web'

const server = new UnicornServer();
```

2. Add some routers to fetch requests:
```ts
import { UnicornServer } from 'unicorn.web'

const server = new UnicornServer();
server.get('foo', () => new Response('foo'));
server.post('boo', (ctx) => new Response(`Hi, ${ctx.body.name}`));
```

3. Serve the application in a port of your choice:
```ts
import { UnicornServer } from 'unicorn.web'

const server = new UnicornServer();
server.get('foo', () => new Response('foo'));
server.post('boo', (ctx) => new Response(`Hi, ${ctx.body.name}`));
server.serve(3000);
```

4. Start the server
```sh
bun run index.ts
```

Just four lines and you have a working web application. Now, your app is running at `http://localhost` in the port you previously setup. If you make get requests for `http://localhost:3000/foo` it will receive `foo` back and if you make post requests for `http://localhost:3000/boo` you receive `Hi` and the name you sent in the body back. 

---

## 🤝 Contributing
Contributions are always welcome! Please follow these steps:

1. Fork the project repository.

2. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```

3. Commit your changes with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```

4. Push your changes to your forked repository
```sh
git push origin new-feature-branch
```

5. Create a new pull request describing the changes you've made and why they're necessary.

The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for additional info.

---
