# Stiefel–Whitney 类　`def.stiefel-whitney-class`　·　说明
根 `../`

**怎么算出来（与陈类对照）**：把实丛 $E$ 复化得 $E \otimes \mathbb{C}$，它是复丛，有陈类 $c_{i}$。**Pontryagin 类**取 $p_{i} = (-1)^{i}c_{2i}(E\otimes\mathbb{C})$；而 $w_{i}$ 是 $c_{i}$ 模 $2$ 的「影子」：$w_{i}(E) \equiv c_{i}(E\otimes\mathbb{C}) \bmod 2$（这条给出可计算的定义，公理版只是它的最小刻画）。⚠️ 严格陈述要用 Thom–Wu 或 Steenrod 平方才能把模 $2$ 讲清楚，本图不展开。

**为什么系数是 $\mathbb{Z}/2$ 而不是 $\mathbb{Z}$**：实丛没有「复数相位」，其示性类天然带 $2$-挠。用 $\mathbb{Z}$ 系数时 $p_{i}$ 只能取到偶次类、且丢掉奇次信息；这正是 $w_{2}$ 与 $p_{1}$ 分工的原因（$w_{2}$ 还能测「非 Spin」这类纯 $2$-挠现象）。

⚠️ **$w_{i}$ 不能用来判同构**：它只给必要条件（$w \ne w' \implies E \not\cong E'$）。所有平凡丛的 $w$ 都是 $1$，但 $w = 1$ 的丛未必平凡。

> 续见 notes/def.stiefel-whitney-class.2.md
