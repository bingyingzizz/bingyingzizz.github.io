# Bernstein 多项式逼近　`thm.bernstein-approximation`
Bernstein 多项式逼近（Weierstrass 定理的显式证明）
layer 17 · 定理 · $C(K)$ 与 Stone–Weierstrass · 泛函分析
[在星图里打开](../#n=thm.bernstein-approximation)　·　[节点索引](../index.md)

对 $f \in C[0, 1]$，令

$$B_n f(x) := \sum_{k=0}^{n} \binom{n}{k} f\!\left(\frac{k}{n}\right) x^k (1 - x)^{n-k} .$$

则 $\|B_n f - f\|_\infty \to 0$。

## 为什么成立（入边，证明在 proofs/）
- [`def.ck-space`](../nodes/def.ck-space.md) C(K,E)：用到了定义 C(K,E)　[proofs/def-link.fa-ck-bernstein.md](../proofs/def-link.fa-ck-bernstein.md)

refs: 泛函分析讲义 2026-10-26；Bernstein 1912

> 说明见 `notes/thm.bernstein-approximation.md`

引用：`thm.bernstein-approximation`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
