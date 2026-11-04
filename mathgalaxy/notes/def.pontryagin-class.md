# Pontryagin 类　`def.pontryagin-class`　·　说明
根 `../`

**为什么只取偶次**：复化 $E\otimes\mathbb{C}$ 带一个**共轭**结构（把 $i$ 变成 $-i$），于是 $c_{2i+1}(E\otimes\mathbb{C}) = -c_{2i+1}$ 型地成对抵消（在 $\mathbb{Z}$ 系数下变成 $2$-挠元）。所以整系数里只剩偶次是真不变量，奇次的信息要用 $\mathbb{Z}/2$ 的 $w_{i}$ 去补 —— **这就是 $w$ 与 $p$ 的分工**。

⚠️ **$p_{1}$ 的一个具体例子**：$S^{4}$ 上的切丛满足 $\int_{S^{4}} p_{1}(TS^{4}) = \pm 2\chi$ 型关系（符号看约定），非零 —— 所以 $TS^{4}$ 非平凡。更著名的是 $\mathbb{CP}^{2}$ 的 $p_{1}$ 与符号差定理（signature theorem）：$\sigma(M) = \frac{1}{3}\int p_{1}$（四维闭可定向流形），这是 Hirzebruch 指标定理的特例。

⚠️ **Whitney 公式的 $2$-挠警告**：$p(E\oplus E') = p(E)p(E')$ 在 $H^{*}(B;\mathbb{Z})$ 里**只对模 $2$-挠**成立（严格版要写到 $H^{*}(B;\mathbb{Z})/\text{挠}$，或用 $\mathbb{Z}[1/2]$ 系数）。这一点与陈类形成鲜明对照（陈类的 Whitney 公式是无条件的）—— 因为复化会引入 $2$-挠。

> 续见 notes/def.pontryagin-class.2.md
