# solidseq-website

[SolidSeq](https://github.com/fcsha) 团队官网 —— 业务方向：**软件定制开发**。

基于 [Astro](https://astro.build) 构建，通过 GitHub Actions 自动将 `dist/` 发布到 `gh-pages` 分支。

## 本地开发

```bash
npm install     # 安装依赖
npm run dev     # 本地开发服务器
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
```

## 目录结构

```
├── .github/workflows/deploy.yml  # CI：构建并部署 dist 到 gh-pages
├── public/                       # 静态资源（favicon 等）
└── src/
    ├── components/               # Header / Footer 等组件
    ├── layouts/Base.astro        # 页面基础布局
    ├── pages/index.astro         # 首页（单页，锚点导航）
    └── styles/global.css         # 全局样式
```

## 自动部署

推送到 `main` 分支后，GitHub Actions 会自动执行 `npm ci && npm run build`，
并将 `dist/` 的内容发布到 [`gh-pages`](../../tree/gh-pages) 分支（每次发布为独立的 orphan 提交）。
Pull Request 仅做构建验证，不会触发发布。

如需启用 GitHub Pages 在线访问，可在仓库 Settings → Pages 中将 Source 指向 `gh-pages` 分支。
