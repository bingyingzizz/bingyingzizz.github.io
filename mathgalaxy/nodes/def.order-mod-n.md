# 模 n 的阶　`def.order-mod-n`
模 $n$ 的阶与循环子群
layer 7 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.order-mod-n)　·　[节点索引](../index.md)

设 $\gcd(a, n) = 1$。使

$$a^{k} \equiv 1 \pmod n$$

成立的最小正整数 $k$ 叫 $a$ 模 $n$ 的**阶**，记 $\operatorname{ord}_{n}(a)$。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/e156:definition.md](../proofs/e156:definition.md)

## 它能推出什么 / 谁在用它
- 被 [`def.primitive-root`](../nodes/def.primitive-root.md) 原根 用
- ⇒ [`thm.euler-criterion`](../nodes/thm.euler-criterion.md) Euler 判别法

refs: 华罗庚《数论导引》第五章

> 说明见 `notes/def.order-mod-n.md`

引用：`def.order-mod-n`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
