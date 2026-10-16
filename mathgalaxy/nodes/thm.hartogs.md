# Hartogs 定理　`thm.hartogs`
Hartogs 定理（Hartogs' Theorem, 1915）—— ZF 中即可证明
layer 8 · 定理 · 基数与等势 · 集合论
[在星图里打开](../#n=thm.hartogs)　·　[节点索引](../index.md)

对任意集合 $X$，都存在一个**不能单射进 $X$** 的序数；取其中最小的那个，记作 $\aleph (X)$，叫做 $X$ 的 **Hartogs 数**（Hartogs 序数）。

$$\forall X \exists\alpha ( \alpha \hookrightarrow  X\text{ 不成立} ),\text{ 且} \alpha = \aleph(X)\text{ 时}: \forall\beta < \alpha, \beta \hookrightarrow  X\text{ 成立}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.ordinal`](../nodes/def.ordinal.md) 序数：用到了定义 序数　[proofs/def-link.ordinal-hartogs.md](../proofs/def-link.ordinal-hartogs.md)

- …另有入边，续页见 [nodes/thm.hartogs.2.md](./thm.hartogs.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.hartogs.3.md](./thm.hartogs.3.md)

refs: Hartogs (1915)；Kunen, Set Theory, I.11；Jech, The Axiom of Choice, Ch. 2

> 说明见 `notes/thm.hartogs.md`

引用：`thm.hartogs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
