# Stiefel–Whitney 类　`def.stiefel-whitney-class`　·　说明
根 `../`

**为什么系数是 $\mathbb{Z}/2$ 而不是 $\mathbb{Z}$**：实丛没有「复数相位」，其示性类天然带 $2$-挠。用 $\mathbb{Z}$ 系数时 $p_{i}$ 只能取到偶次类、且丢掉奇次信息；这正是 $w_{2}$ 与 $p_{1}$ 分工的原因（$w_{2}$ 还能测「非 Spin」这类纯 $2$-挠现象）。

⚠️ **$w_{i}$ 不能用来判同构**：它只给必要条件（$w \ne w' \implies E \not\cong E'$）。所有平凡丛的 $w$ 都是 $1$，但 $w = 1$ 的丛未必平凡。

⚠️ **$w_{1}$ 与「定向」的等价是本图最常用的那条**：见 `prop.orientable-iff-w1`，它把「结构群可从 $\mathrm{GL}(k)$ 约化到 $\mathrm{SO}(k)$」翻译成一个上同调类的消失。
