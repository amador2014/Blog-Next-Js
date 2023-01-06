---
title: 'Two Forms of Pre-rendering'
date: '2020-03-30'
description: 'Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.'
tags: ['next', 'react', 'pre-rendering']
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the [Google](https://www.google.com "Google's Homepage")
for a page.

<p align="center">
<img width="600px" alt="Imagem ilustrativa" src="https://tsh.io/wp-content/uploads/fly-images/25386/ssr-ssg-overview-559x355.png" />
</p>

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
