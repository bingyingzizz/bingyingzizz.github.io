# Stiefel–Whitney 类　`def.stiefel-whitney-class`　·　说明
根 `../`

**怎么算出来（与陈类对照）**：把实丛 $E$ 复化得 $E \otimes \mathbb{C}$，它是复丛，有陈类 $c_{i}$。**Pontryagin 类**取 $p_{i} = (-1)^{i}c_{2i}(E\otimes\mathbb{C})$；而 $w_{i}$ 是 $c_{i}$ 模 $2$ 的「影子」：$\rho_{2}\bigl(c_{i}(E\otimes\mathbb{C})\bigr) = w_{i}(E)^{2}$（**次数要对**：$w_{i} \in H^{i}$ 而 $c_{i} \in H^{2i}$，所以是 $c_{i}$ 的模 $2$ 约化等于 $w_{i}$ 的**平方**，不是 $w_{i}$ 本身；公理版只是它的最小刻画）。⚠️ 严格陈述要用 Thom–Wu 或 Steenrod 平方才能把模 $2$ 讲清楚，本图不展开。

**为什么系数是 $\mathbb{Z}/2$ 而不是 $\mathbb{Z}$**：实丛没有「复数相位」，其示性类天然带 $2$-挠。用 $\mathbb{Z}$ 系数时 $p_{i}$ 只能取到偶次类、且丢掉奇次信息；这正是 $w_{2}$ 与 $p_{1}$ 分工的原因（$w_{2}$ 还能测「非 Spin」这类纯 $2$-挠现象）。

> 续见 notes/def.stiefel-whitney-class.2.md
