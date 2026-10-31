# 有界变差函数　`def.bounded-variation`
全变差与有界变差函数
layer 16 · 定义 · 有界变差与绝对连续 · 实变函数+数学分析
[在星图里打开](../#n=def.bounded-variation)　·　[节点索引](../index.md)

设 $F : \mathbb{R} \to \mathbb{C}$。定义它的**全变差函数**

$$T_F(x) := \sup \{ \sum_{j=1}^{n} |F(x_j) - F(x_{j-1})| : n \in \mathbb{N}, -\infty < x_0 < \cdots < x_n = x \}$$

$T_F$ 是递增的 $\mathbb{R} \to [0, +\infty]$。若 $T_F(+\infty) < +\infty$，称 $F$ 是**有界变差的**，这类函数全体记作 **BV**。
> 陈述续见 [nodes/def.bounded-variation.2.md](./def.bounded-variation.2.md)


## 它能推出什么 / 谁在用它
- 被 [`prop.bv-examples`](../nodes/prop.bv-examples.md) 有界变差函数的例子与基本性质 用

- …另有出边，续页见 [nodes/def.bounded-variation.4.md](./def.bounded-variation.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.bounded-variation.3.md](./def.bounded-variation.3.md)

refs: Folland, Real Analysis, §3.5；Rudin, Real and Complex Analysis, Ch. 7

> 说明见 `notes/def.bounded-variation.md`

引用：`def.bounded-variation`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
