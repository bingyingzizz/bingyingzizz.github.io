# Jacobi 符号的计算法则　`thm.jacobi-laws`
Jacobi 符号的互反与乘性
layer 17 · 定理 · 二次剩余与原根 · 数论
[在星图里打开](../#n=thm.jacobi-laws)　·　[节点索引](../index.md)

设 $m, n$ 是正奇数，$a, b \in \mathbb{Z}$。则（前两个式子是**定义**，无需互素；**互反律（第三个）要 $\gcd(m,n) = 1$** —— 取 $m = n = 3$：左端 $0\cdot 0 = 0$，右端 $(-1)^{1} = -1$）

$$\left(\frac{ab}{n}\right) = \left(\frac{a}{n}\right)\left(\frac{b}{n}\right), \qquad \left(\frac{a}{mn}\right) = \left(\frac{a}{m}\right)\left(\frac{a}{n}\right),$$
> 陈述续见 [nodes/thm.jacobi-laws.2.md](./thm.jacobi-laws.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.jacobi-symbol`](../nodes/def.jacobi-symbol.md) Jacobi 符号：用到了定义 Jacobi 符号　[proofs/e158.definition.md](../proofs/e158.definition.md)

refs: 华罗庚《数论导引》第四章

> 说明见 `notes/thm.jacobi-laws.md`

引用：`thm.jacobi-laws`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
