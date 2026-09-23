# 完备　`def.complete`
完备距离空间（Complete Metric Space）
layer 13 · 定义 · 度量空间 · 拓扑学

序列 $\{x_{n}\}$ 是 **Cauchy 列**，当且仅当

$$\forall\varepsilon > 0, \exists N : m, n \ge N \implies d(x_m, x_n) < \varepsilon$$

距离空间 (X, d) **完备**，当且仅当 $X$ 中每个 Cauchy 列都在 $X$ 中收敛：

$$\{x_n\}\text{ 是} Cauchy\text{ 列} \implies \exists x \in X : x_n \to x$$

## 为什么成立（入边，证明在 proofs/）
- `def.sequentially-compact` 列紧：列紧 $\implies$ 完备　proofs/imp.seqcompact-complete.md
- `def.compact` 紧：紧 $\implies$ 完备　proofs/imp.compact-complete.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-dep.metric-complete.md

## 它能推出什么 / 谁在用它
- ⇒ `def.sequentially-compact` 列紧
- 被 `thm.metric-compact-equiv` 紧的三个等价刻画 用
- 被 `prop.subset-compact-equiv` 子集的紧性刻画 用

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.complete.md`
