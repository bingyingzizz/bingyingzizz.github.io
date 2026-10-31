# 赋值判据 $\implies$ 分离/固有
`imp.scheme-embeds-adic` · 推出 · strong 边 · 根 `../`

`def.discrete-adic-space` 离散 adic 空间 + `prop.rational-localization` 有理开集上的局部化 → `prop.scheme-embeds-adic` 概形嵌入 adic 空间

有限型时，仿射局部上 $X_{\mathrm{ad}} \to X_{\mathrm{ad}/R}$ 就是 $\operatorname{Spa}(A,A) \to \operatorname{Spa}(A,\widetilde{R})$，由 `prop.rational-localization` 知是开浸入。

整体上，开浸入 $\iff$ 点集上单射（局部已是开浸入）；而点集上的单射 / 双射正是分离 / 固有的**赋值判据**（用 `def.discrete-adic-space` 里「点 = 赋值环映射」的描述）。$\blacksquare$
