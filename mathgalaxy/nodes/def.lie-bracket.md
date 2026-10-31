# Lie 括号　`def.lie-bracket`
向量场的 Lie 括号
layer 20 · 定义 · 向量场与 Lie 结构 · 微分几何
[在星图里打开](../#n=def.lie-bracket)　·　[节点索引](../index.md)

**在说什么**：两个向量场各自都不能与另一个「合成」出新的向量场，但它们的交换子可以 —— 两次方向导数相减，二阶项自动抵消，剩下的仍是向量场。这个差值就是 Lie 括号。

设 $X, Y \in \mathfrak{X}(M)$。**Lie 括号** $[X,Y]$ 是作用在光滑函数上的算子

$$[X,Y]f := X(Yf) - Y(Xf),\qquad f \in C^{\infty}(M).$$
> 陈述续见 [nodes/def.lie-bracket.2.md](./def.lie-bracket.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.lie-algebra`](../nodes/def.lie-algebra.md) Lie 代数 用

- …另有出边，续页见 [nodes/def.lie-bracket.4.md](./def.lie-bracket.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.lie-bracket.3.md](./def.lie-bracket.3.md)

refs: Tu, An Introduction to Manifolds (2nd ed., GTM 334), 「Tangent Vectors」· 向量场的 Lie 括号

> 说明见 `notes/def.lie-bracket.md`

引用：`def.lie-bracket`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
