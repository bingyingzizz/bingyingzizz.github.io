# 绕数　`def.winding-number`
定义：绕数（闭曲线关于一点的指数）
layer 18 · 定义 · 复变函数基础 · 复变函数
[在星图里打开](../#n=def.winding-number)　·　[节点索引](../index.md)

**白话**：绕数是一个整数，数的是「绕某点转了几圈」—— 逆时针一圈 $+1$，顺时针 $-1$，没绕 $0$。

设 $\gamma: [a, b] \to \mathbb{C}$ 是分段光滑闭曲线，$a_0 \notin \gamma$。定义 $\gamma$ 关于 $a_0$ 的**绕数**（也叫指数）

$$n(\gamma, a_0) := \frac{1}{2\pi i}\oint_{\gamma} \frac{\mathrm{d}\zeta}{\zeta - a_0}.$$
> 陈述续见 [nodes/def.winding-number.2.md](./def.winding-number.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.argument-principle`](../nodes/thm.argument-principle.md) 辐角原理

- …另有出边，续页见 [nodes/def.winding-number.4.md](./def.winding-number.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.winding-number.3.md](./def.winding-number.3.md)

refs: 王晓光《复变函数》· 辐角原理（曲线的绕数）；Ahlfors, Complex Analysis, Ch. 4 · Complex Integration

> 说明见 `notes/def.winding-number.md`

引用：`def.winding-number`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
