任务：给 Neverland 首页找一张真实的蓝天白云背景（允许联网搜索并下载图片到本项目 assets/bg/ 目录）。

背景：are-u-human 是一个黑客松作品，首页 index.html 模仿 1997 年 GeoCities 个人主页（Netscape 窗口里，蓝天白云平铺背景，紫色 Times 粗体标题）。参考截图里的背景是当年非常常见的那张"真实照片蓝天白云"平铺图：浅蓝天空，很多小朵、蓬松的白色积云，均匀铺满，照片质感而不是矢量画。现在首页的云是 CSS 径向渐变画的，太假，需要换成真实图片。

要做的事：
1. 先找原汁原味的那张：Internet Archive 的 GifCities（https://gifcities.org，GeoCities 存档 GIF 搜索）里搜 clouds / sky background，找出最像参考图的 GeoCities 云朵平铺背景，挑 3–5 张候选下载。
2. 再找 2–3 张可以放心公开使用的真实照片做备选（Wikimedia Commons 公有领域/CC0、Unsplash、Pexels），要那种满天小朵积云的蓝天，必要时裁成可平铺的小块并处理接缝。
3. 全部存到 assets/bg/，文件名能看出来源；写 assets/bg/SOURCES.md，每张记原始链接和授权情况（GifCities 的写明是存档图、授权不明）。
4. 做一个对比页 assets/bg/compare.html：每张候选都作为整页平铺背景展示一块，上面压一行紫色 Times 粗体 "Welcome to Neverland"，方便人一眼比较。
5. 不要改 index.html，选哪张由人来定。

完成条件：assets/bg/ 下至少 4 张候选图、SOURCES.md 和 compare.html 都存在，compare.html 用 python3 -m http.server 打开能正常显示所有背景；最后在终端里简短汇报每张的来源、授权和你最推荐哪张、为什么。
