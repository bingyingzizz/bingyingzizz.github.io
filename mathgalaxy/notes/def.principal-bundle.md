# 主丛　`def.principal-bundle`　·　说明
根 `../`

**为什么主丛值得单独记**：向量丛的结构群是 $\operatorname{GL}(k)$，但它只藏在转移函数里、看不见；主丛把结构群**变成空间的一部分**（纤维就是群），于是「联络」「曲率」「示性类」都能在主丛上整体地谈，再沿表示拉到配丛上。Tu 讲联络与曲率的路线正是这一条。

⚠️ 右作用还是左作用：约定取**右**作用，好处是转移函数可以顺着写在坐标后面（$\Phi(u\cdot g) = (\pi(u),\varphi(u)g)$），不必写成 $\varphi(g^{-1}u)$ 这类反向的式子。换约定时整条公式都要改，混着用就是符号错误的来源。

⭐ 特例串起来记：主 $G$-丛（纤维 $G$）$\rightsquigarrow$ 取 $G$ 在某个流形 $F$ 上的作用、把纤维换掉，得**配丛**（纤维 $F$；本图尚未收录）$\rightsquigarrow$ 取 $F = \mathbb{R}^{k}$、$G = \operatorname{GL}(k,\mathbb{R})$，得向量丛（`def.vector-bundle`）$\rightsquigarrow$ 取 $F$ 离散，得覆叠空间（`def.covering-space`）。反过来：任何向量丛都有帧丛，都在主丛这一层。

> 续见 notes/def.principal-bundle.2.md
