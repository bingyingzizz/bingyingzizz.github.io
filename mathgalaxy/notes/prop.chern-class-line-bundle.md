# 线丛的陈类计算　`prop.chern-class-line-bundle`　·　说明
根 `../`

**为什么秩 $1$ 特别简单**：$\mathfrak{gl}(1,\mathbb{C}) = \mathbb{C}$ 交换，于是「共轭不变」这个条件自动满足 —— 任何多项式都不变，不用挑。所以线丛的示性类只有一条（$c_{1}$），后面的全为零。

**这个整数是什么**：$\frac{i}{2\pi}\int_{\Sigma}\Omega$ 就是**绕数 / 第一陈数**，物理里叫「磁通量的量子化」。它在 $\Sigma = S^{2}$ 上取遍 $\mathbb{Z}$ —— 这就是复线丛在 $S^{2}$ 上由 $\mathbb{Z}$ 分类（Hopf 丛是生成元，`thm.bundle-classification` 的注里说过）的解析根子。

⚠️ **不能省 $c_{j}(L)=0$（$j\ge2$）**：它保证线丛的示性类只有一个自由度。⚠️ 但也别误推「$c_1=0$ 就平凡」：$c_1=0$ 只说明该丛在 $H^2$ 层面看不出；平坦线丛就是一例（$c_1=0$ 但可以非平凡）。

> 续见 notes/prop.chern-class-line-bundle.2.md
