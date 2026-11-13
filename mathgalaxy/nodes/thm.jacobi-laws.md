# Jacobi 符号的计算法则　`thm.jacobi-laws`
Jacobi 符号的互反与乘性
layer 17 · 定理 · 二次剩余与原根 · 数论
[在星图里打开](../#n=thm.jacobi-laws)　·　[节点索引](../index.md)

设 $m, n$ 是正奇数，$a, b \in \mathbb{Z}$。则（前两个式子是**定义**，无需互素；**互反律（第三个）要 $\gcd(m,n) = 1$** —— 取 $m = n = 3$：左端 $0\cdot 0 = 0$，右端 $(-1)^{1} = -1$）
> 陈述续见 [nodes/thm.jacobi-laws.2.md](./thm.jacobi-laws.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.jacobi-laws.3.md](./thm.jacobi-laws.3.md)

refs: 华罗庚《数论导引》第四章

## 说明
**三条法则的分工**：前两条由定义展开（乘性），第三条（互反律）要 $\gcd(m,n)=1$，由 Legendre 互反律逐素因子相乘并合并指数得到。完整证明见边 `imp.jacobi-laws-proof`。

引用：`thm.jacobi-laws`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
