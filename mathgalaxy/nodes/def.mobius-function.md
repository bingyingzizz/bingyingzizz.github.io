# Möbius 函数　`def.mobius-function`
Möbius 函数 $\mu$：按素因子个数取符号
layer 15 · 定义 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=def.mobius-function)　·　[节点索引](../index.md)

定义

$$\mu(n) := \begin{cases} 1, & n = 1, \\ (-1)^{r}, & n = p_{1}p_{2}\cdots p_{r}\ \text{是}\ r\ \text{个互不相同素数之积}, \\ 0, & n\ \text{含平方因子}\ (p^{2} \mid n) . \end{cases}$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.crt`](../nodes/thm.crt.md) 中国剩余定理：用到了定义 中国剩余定理　[proofs/e138:definition.md](../proofs/e138:definition.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.mu-sum`](../nodes/thm.mu-sum.md) Möbius 和的恒等式 用

- …另有出边，续页见 [nodes/def.mobius-function.2.md](./def.mobius-function.2.md)

refs: 华罗庚《数论导引》第三章；Apostol, Ch. 2

> 说明见 `notes/def.mobius-function.md`

引用：`def.mobius-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
