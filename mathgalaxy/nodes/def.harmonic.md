# 调和函数　`def.harmonic`
定义：调和函数
layer 17 · 定义 · 调和函数 · 复变函数
[在星图里打开](../#n=def.harmonic)　·　[节点索引](../index.md)

**白话**：二阶偏导连续、并且满足 Laplace 方程 $\Delta u = 0$ 的实值函数。通俗说就是「处处不会比周围更凸也不会更凹」的函数。

设 $\Omega \subset \mathbb{R}^2 \cong \mathbb{C}$ 是区域，$u: \Omega \to \mathbb{R}$ 属于 $C^2$。若

$$\Delta u := \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

在 $\Omega$ 上处处成立，称 $u$ 是 $\Omega$ 上的**调和函数**。
> 陈述续见 [nodes/def.harmonic.2.md](./def.harmonic.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.harmonic-mean-value`](../nodes/thm.harmonic-mean-value.md) 调和函数的均值性质

- …另有出边，续页见 [nodes/def.harmonic.4.md](./def.harmonic.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.harmonic.3.md](./def.harmonic.3.md)

refs: 王晓光《复变函数》· 调和函数；Ahlfors, Complex Analysis · 调和函数与 Poisson 公式

> 说明见 `notes/def.harmonic.md`

引用：`def.harmonic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
