# Möbius 函数　`def.mobius-function`
Möbius 函数 $\mu$：按素因子个数取符号
layer 0 · 定义 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=def.mobius-function)　·　[节点索引](../index.md)

定义

$\mu : \mathbb{N} \to \mathbb{Z}$ 按 $n$ 的素因子结构定义：

- $n = 1$ 时 $\mu(1) = 1$；
- $n$ 是 $r$ 个**互不相同**素数之积（$n = p_{1}p_{2}\cdots p_{r}$）时 $\mu(n) = (-1)^{r}$；
- $n$ **含平方因子**（存在素数 $p$ 使 $p^{2} \mid n$）时 $\mu(n) = 0$。

## 它能推出什么 / 谁在用它
- 被 [`thm.mu-sum`](../nodes/thm.mu-sum.md) Möbius 和的恒等式 用
- ⇒ [`thm.mu-sum`](../nodes/thm.mu-sum.md) Möbius 和的恒等式

refs: 华罗庚《数论导引》第三章；Apostol, Ch. 2

> 说明见 `notes/def.mobius-function.md`

引用：`def.mobius-function`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
