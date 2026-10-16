# 完备　`def.complete`
完备距离空间（Complete Metric Space）
layer 14 · 定义 · 度量空间 · 拓扑学
[在星图里打开](../#n=def.complete)　·　[节点索引](../index.md)

序列 $\{x_{n}\}$ 是 **Cauchy 列**，当且仅当

$$\forall\varepsilon > 0, \exists N : m, n \ge N \implies d(x_m, x_n) < \varepsilon$$

距离空间 (X, d) **完备**，当且仅当 $X$ 中每个 Cauchy 列都在 $X$ 中收敛：

$$\{x_n\}\text{ 是} Cauchy\text{ 列} \implies \exists x \in X : x_n \to x$$

## 为什么成立（入边，证明在 proofs/）
- [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧：列紧 $\implies$ 完备　[proofs/imp.seqcompact-complete.md](../proofs/imp.seqcompact-complete.md)

- …另有入边，续页见 [nodes/def.complete.2.md](./def.complete.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.complete.3.md](./def.complete.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.complete.md`

引用：`def.complete`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
