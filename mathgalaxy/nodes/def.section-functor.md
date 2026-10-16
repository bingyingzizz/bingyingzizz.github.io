# 截面函子　`def.section-functor`
截面函子与全局截面（Sections Functor）
layer 16 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.section-functor)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 是 site，$X \in \mathcal{C}$，$\widetilde{\mathcal{C}}$ 是层范畴。**在 $X$ 处的截面函子**是

$$\Gamma(X, -) : \widetilde{\mathcal{C}} \longrightarrow \mathbf{Set}, \qquad F \longmapsto \Gamma(X, F) := F(X).$$

取 $X = \mathbf{1}$（终对象）时叫**全局截面函子**，记 $\Gamma(F) := F(\mathbf{1})$。

## 它能推出什么 / 谁在用它
- 被 [`def.sheaf-cohomology`](../nodes/def.sheaf-cohomology.md) 层上同调 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.section-functor.2.md](./def.section-functor.2.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

> 说明见 `notes/def.section-functor.md`

引用：`def.section-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
