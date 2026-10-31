# 全纯函数　`def.holomorphic`
定义：全纯函数与复导数
layer 16 · 定义 · 复变函数基础 · 复变函数
[在星图里打开](../#n=def.holomorphic)　·　[节点索引](../index.md)

**白话**：复可微就是「差商在复意义下收敛」—— $h$ 可以从**任何方向、任何方式**趋于 $0$，但差商必须落到同一个复数。

设 $\Omega$ 是平面区域（连通开集），$f: \Omega \to \mathbb{C}$，$z_0 \in \Omega$。若极限

$$f'(z_0) := \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h} \qquad (h \in \mathbb{C},\ h \ne 0,\ z_0 + h \in \Omega)$$
> 陈述续见 [nodes/def.holomorphic.2.md](./def.holomorphic.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.cauchy-riemann`](../nodes/thm.cauchy-riemann.md) Cauchy–Riemann 方程

- …另有出边，续页见 [nodes/def.holomorphic.4.md](./def.holomorphic.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.holomorphic.3.md](./def.holomorphic.3.md)

refs: 王晓光《复变函数》笔记，第 4 章 · 全纯函数；Ahlfors, Complex Analysis, Ch. 2 · Complex Functions

> 说明见 `notes/def.holomorphic.md`

引用：`def.holomorphic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
