# bun-dasar

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

Workspace memungkinkan menyimpan beberapa proyek di satu folder dan menggunakan package manager yang sama untuk mereka. sub-project tersebut disimpan folder packages.

To build:
bun build <filename> --minifiy --sourcemap --outdir dist
bun build <filename> --minifiy --sourcemap --compile --outfile dist/<filename>