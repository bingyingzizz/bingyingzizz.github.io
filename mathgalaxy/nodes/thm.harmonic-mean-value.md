# 调和函数的均值性质　`thm.harmonic-mean-value`
定理：调和函数的均值性质
layer 21 · 定理 · 调和函数 · 复变函数
[在星图里打开](../#n=thm.harmonic-mean-value)　·　[节点索引](../index.md)

**白话**：调和函数在一点的值，等于它在以该点为心、任意半径的圆周上的平均值；也等于圆盘上的面积平均值。

设 $u$ 在 $D(a, R)$ 上调和，$0 < r < R$。则

$$u(a) = \frac{1}{2\pi}\int_0^{2\pi} u(a + r e^{i\theta})\,\mathrm{d}\theta,$$

并且（面积平均）
> 陈述续见 [nodes/thm.harmonic-mean-value.2.md](./thm.harmonic-mean-value.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.harmonic-maximum`](../nodes/thm.harmonic-maximum.md) 调和函数的最大值原理

- …另有出边，续页见 [nodes/thm.harmonic-mean-value.5.md](./thm.harmonic-mean-value.5.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.harmonic-mean-value.3.md](./thm.harmonic-mean-value.3.md)

refs: 王晓光《复变函数》· 调和函数的均值性质；Ahlfors, Complex Analysis · 调和函数与 Poisson 公式

> 说明见 `notes/thm.harmonic-mean-value.md`

引用：`thm.harmonic-mean-value`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
