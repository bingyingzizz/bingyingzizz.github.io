# 零集与完备　`def.null-set`
μ-零集 / 完备测度空间（Null Set & Complete Measure Space）
layer 15 · 定义 · 测度的构造 · 分析学
[在星图里打开](../#n=def.null-set)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$E \in \mathcal{M}$。

若 $\mu(E) = 0$，则称 $E$ 是 **$\mu$零集**（$\mu -null set$）。

若**零集的每个子集都可测**：

$$\forall E \in \mathcal{M}, \forall F \subseteq E : \mu(E) = 0 \implies F \in \mathcal{M}$$

则称 $\mu$（或这个测度空间）**完备**。

## 为什么成立（入边，证明在 proofs/）
- [`def.measure`](../nodes/def.measure.md) 测度：用到了定义 测度　[proofs/def-dep.measure-null-set.md](../proofs/def-dep.measure-null-set.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.null-set.2.md](./def.null-set.2.md)

refs: Halmos, Measure Theory, §11

> 说明见 `notes/def.null-set.md`

引用：`def.null-set`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
