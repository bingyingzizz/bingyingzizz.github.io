# 整数幂　`def.power`
整数幂 $a^{n}$
layer 8 · 定义 · 实数的运算与不等式 · 数学分析
[在星图里打开](../#n=def.power)　·　[节点索引](../index.md)

设 $A$ 是含幺环（如 $\mathbb{Z}$、$\mathbb{R}$），$a \in A$。**整数幂**由递推定义：

$$a^{0} := 1, \qquad a^{n+1} := a^{n} \cdot a \quad (n \in \mathbb{N});$$

若 $a$ 可逆（在 $\mathbb{R}$ 中即 $a \ne 0$），再对 $n \ge 1$ 定义

$$a^{-n} := (a^{-1})^{n} = \frac{1}{a^{n}}.$$

## 为什么成立（入边，证明在 proofs/）
- [`def.nat-arith`](../nodes/def.nat-arith.md) 自然数的加法与乘法：用到了定义 自然数的加法与乘法　[proofs/def-link.power-nat.md](../proofs/def-link.power-nat.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.power-rules`](../nodes/prop.power-rules.md) 指数律与幂的单调性

- …另有出边，续页见 [nodes/def.power.2.md](./def.power.2.md)

refs: Lang, Algebra, Ch. I

> 说明见 `notes/def.power.md`

引用：`def.power`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
