# 有限 / σ-有限 / 半有限　`def.measure-space`
测度空间的几种「大小」：有限、σ-有限、半有限
layer 15 · 定义 · 测度的构造 · 分析学
[在星图里打开](../#n=def.measure-space)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu )$ 是测度空间。

- **有限**：$\mu(X) < \infty$
- **$\sigma$有限**：$X$ 能写成可数个测度有限的集合之并：$X = \bigcup_{j=1}^{\infty} E_j, \quad  \mu(E_j) < \infty$
- **半有限**：每个无穷测度的集合里都藏着正有限测度的子集：

$$\forall E \in \mathcal{M}, \mu(E) = \infty \implies \exists F \subseteq E, F \in \mathcal{M}, 0 < \mu(F) < \infty$$

## 它能推出什么 / 谁在用它
- 被 [`def.semifinite-part`](../nodes/def.semifinite-part.md) 半有限部分 用

- …另有出边，续页见 [nodes/def.measure-space.3.md](./def.measure-space.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.measure-space.2.md](./def.measure-space.2.md)

refs: Folland, Real Analysis, §1.2

> 说明见 `notes/def.measure-space.md`

引用：`def.measure-space`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
