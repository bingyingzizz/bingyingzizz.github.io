# 诱导范数与距离　`def.induced-norm`
由内积诱导的范数与距离
layer 14 · 定义 · 内积空间与正交性 · 抽象代数+分析学
[在星图里打开](../#n=def.induced-norm)　·　[节点索引](../index.md)

设 $(V, \langle \cdot, \cdot \rangle)$ 是内积空间。定义

$$\|v\| := \sqrt{\langle v, v \rangle}, \qquad d(u, v) := \|u - v\|$$

则 $\|\cdot\|$ 是 $V$ 上的**范数**（正定、齐次、三角不等式），$d$ 是**距离**，并且

$$\|v\| = 0 \iff v = 0, \qquad \|cv\| = |c|\,\|v\|, \qquad \|u + v\| \le \|u\| + \|v\|$$

（三角不等式来自 Cauchy–Schwarz。）

## 它能推出什么 / 谁在用它
- ⇒ [`thm.cauchy-schwarz`](../nodes/thm.cauchy-schwarz.md) Cauchy–Schwarz

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.induced-norm.2.md](./def.induced-norm.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.induced-norm.md`

引用：`def.induced-norm`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
