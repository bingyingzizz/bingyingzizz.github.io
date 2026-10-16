# 多项式环　`def.polynomial-ring`
多项式环 $K[x]$（Polynomial Ring）
layer 8 · 定义 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=def.polynomial-ring)　·　[节点索引](../index.md)

在 $K$ 上全体一元多项式构成的集合 $K[x]$ 上定义

$$(f + g)_i := a_i + b_i, \qquad (fg)_i := \sum_{j=0}^{i} a_j\, b_{i-j}$$

（加法逐项、乘法是**卷积**）。则 $K[x]$ 是交换含幺环，叫 $K$ 上的**多项式环**，而且

$$\deg(fg) = \deg f + \deg g \qquad (f, g \ne 0)$$

由此 $K[x]$ 是**整环**（无零因子）：$fg = 0 \implies f = 0$ 或 $g = 0$。

## 为什么成立（入边，证明在 proofs/）
- [`def.ring`](../nodes/def.ring.md) 环：用到了定义 环　[proofs/dep.ring-polyring.md](../proofs/dep.ring-polyring.md)

- …另有入边，续页见 [nodes/def.polynomial-ring.2.md](./def.polynomial-ring.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.polynomial-ring.3.md](./def.polynomial-ring.3.md)

refs: Lang, Algebra, Ch. IV

> 说明见 `notes/def.polynomial-ring.md`

引用：`def.polynomial-ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
