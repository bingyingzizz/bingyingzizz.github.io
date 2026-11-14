# Stiefel–Whitney 类　`def.stiefel-whitney-class`　·　说明
根 `../`

**怎么算出来（与陈类对照）**：把实丛 $E$ 复化得 $E \otimes \mathbb{C}$，它是复丛，有陈类 $c_{i}$。**Pontryagin 类**取 $p_{i} = (-1)^{i}c_{2i}(E\otimes\mathbb{C})$；而 $w_{i}$ 是 $c_{i}$ 模 $2$ 的「影子」：$\rho_{2}\bigl(c_{i}(E\otimes\mathbb{C})\bigr) = w_{i}(E)^{2}$（**次数要对**：$w_{i} \in H^{i}$ 而 $c_{i} \in H^{2i}$，所以是 $c_{i}$ 的模 $2$ 约化等于 $w_{i}$ 的**平方**，不是 $w_{i}$ 本身；公理版只是它的最小刻画）。对实线丛可以直接验：$L\otimes\mathbb{C}\cong L\oplus L$，故 $c_{1}(L\otimes\mathbb{C}) = e(L\oplus L)$（复线丛的 $c_{1}$ 就是其底层实 $2$ 平面丛的 Euler 类），而 $\rho_{2}\bigl(e(L\oplus L)\bigr) = w_{1}(L)^{2}$ —— 在 $\mathbb{RP}^{2}$ 的 tautological 线丛上它**不是零**（是 $H^{2}(\mathbb{RP}^{2};\mathbb{Z})\cong\mathbb{Z}/2$ 的生成元），与 $w_{1}^{2}\ne 0$ 一致。⚠️ 严格陈述要用 Thom–Wu 或 Steenrod 平方才能把模 $2$ 讲清楚，本图不展开。

> 续见 notes/def.stiefel-whitney-class.2.md
