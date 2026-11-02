# 阶整除 Euler 函数　`thm.order-divides-phi`
$\operatorname{ord}_{n}(a) \mid \varphi(n)$
layer 9 · 定理 · 二次剩余与原根 · 数论
[在星图里打开](../#n=thm.order-divides-phi)　·　[节点索引](../index.md)

设 $\gcd(a, n) = 1$。则 $\operatorname{ord}_{n}(a) \mid \varphi(n)$；特别地 $a^{\varphi(n)} \equiv 1 \pmod n$（Euler 定理）。

## 为什么成立（入边，证明在 proofs/）
- [`thm.lagrange`](../nodes/thm.lagrange.md) Lagrange 定理：阶整除群阶：Lagrange 定理　[proofs/imp.nt-order-phi.md](../proofs/imp.nt-order-phi.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.primitive-root-exists`](../nodes/thm.primitive-root-exists.md) 模素数有原根

refs: 华罗庚《数论导引》第五章

> 说明见 `notes/thm.order-divides-phi.md`

引用：`thm.order-divides-phi`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
