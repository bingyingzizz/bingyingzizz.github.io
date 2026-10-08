# 完备 + 全有界 $\implies$ 列紧（对角线法）
`imp.complete-totbdd-seqcompact` · 推出 · strong 边 · 根 `../`

`def.complete` 完备 + `def.totally-bounded` 全有界 → `def.sequentially-compact` 列紧

设 $X$ 完备且全有界，$\{x_{n}\}$ 是 $X$ 中任一序列。要抽出一个收敛子列。

**① 抽一个「直径越来越小」的子列。** 对 $k = 1, 2, 3$ … 依次操作：由全有界，$X$ 能被有限个半径 1/k 的球盖住，于是**其中一个球含有当前子列中的无穷多项**（抽屉原理：有限个球盖住无穷多项，必有一个球含无穷多项）。把子列限制到这个球里。

这样得到一串子列

$$\{x_n\} \supseteq \{x^{(1)}_n\} \supseteq \{x^{(2)}_n\} \supseteq \cdots$$

其中第 $k$ 个子列的项全部落在某个半径 1/k 的球内，因此它任意两项的距离 $< 2/k$。

> 续见 proofs/imp.complete-totbdd-seqcompact.2.md
