# Fatou 的推论　`cor.fatou`
推论：$f_{n} \to f \text{a.e.} \implies \int f \le \lim \int f_{n}$
layer 20 · 推论 · 积分 · 分析学
[在星图里打开](../#n=cor.fatou)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$，$f \in L^+$，且 $f_n \to f$ a.e.。则

$$\int f \le \liminf_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`lem.fatou`](../nodes/lem.fatou.md) Fatou 引理：Fatou 引理 $\implies \text{a.e.}$ 版本的 Fatou　[proofs/imp.fatou-corollary.md](../proofs/imp.fatou-corollary.md)

refs: Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

- …另有入边，续页见 [nodes/cor.fatou.2.md](./cor.fatou.2.md)

## 说明
a.e. 收敛时 $\liminf f_n = f$，直接套 Fatou 引理即可。

引用：`cor.fatou`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
