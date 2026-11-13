# Bernstein 多项式逼近　`thm.bernstein-approximation`
Bernstein 多项式逼近（Weierstrass 定理的显式证明）
layer 22 · 定理 · C(K) 与 Stone–Weierstrass · 泛函分析
[在星图里打开](../#n=thm.bernstein-approximation)　·　[节点索引](../index.md)

对 $f \in C[0, 1]$，令

$$B_n f(x) := \sum_{k=0}^{n} \binom{n}{k} f\!\left(\frac{k}{n}\right) x^k (1 - x)^{n-k} .$$

则 $\|B_n f - f\|_\infty \to 0$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.bernstein-approximation.2.md](./thm.bernstein-approximation.2.md)

refs: Rudin, Functional Analysis · Stone–Weierstrass 定理；Bernstein 1912

> 说明见 `notes/thm.bernstein-approximation.md`

引用：`thm.bernstein-approximation`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
