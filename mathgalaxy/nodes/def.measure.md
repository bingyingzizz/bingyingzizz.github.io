# 测度　`def.measure`
测度
layer 14 · 定义 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=def.measure)　·　[节点索引](../index.md)

设 $\mathcal{M}$ 是 $X$ 上的 $\sigma$代数。函数 $\mu : \mathcal{M} \to [0, +\infty]$ 是一个**测度**，当且仅当

- **(i)**　$\mu(\emptyset) = 0$
- **(ii) 可数可加**：若 $\{E_{j}\}$ 是 $\mathcal{M}$ 中两两不交的集合列，则

$$\mu( \bigcup_{j=1}^{\infty} E_j ) = \sum_{j=1}^{\infty} \mu(E_j)$$

$(X, \mathcal{M}, \mu )$ 称为**测度空间**。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.measure-basic`](../nodes/prop.measure-basic.md) 测度的基本性质

- …另有出边，续页见 [nodes/def.measure.3.md](./def.measure.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.measure.2.md](./def.measure.2.md)

refs: Halmos, Measure Theory, §9；Folland, Real Analysis, §1.2

外部：Wikipedia https://en.wikipedia.org/wiki/Measure_(mathematics)

> 说明见 `notes/def.measure.md`

引用：`def.measure`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
