// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 预期的发布地址（GitHub Pages 项目页）。
  // 站点为单页、样式全部内联、链接均为相对或页内锚点，
  // 因此在任意路径（根路径 / 自定义域名 / 子路径）下均可正常访问。
  site: 'https://fcsha.github.io',
  base: '/solidseq-website',
  build: {
    // 站点只有一个页面，直接内联样式，产出物最简、托管路径无关。
    inlineStylesheets: 'always',
  },
});
