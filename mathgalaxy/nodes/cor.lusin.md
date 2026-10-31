# Lusin 定理　`cor.lusin`
Lusin 定理：可测函数几乎处处连续
layer 22 · 推论 · 可测函数与收敛 · 实变函数+数学分析
[在星图里打开](../#n=cor.lusin)　·　[节点索引](../index.md)

设 $f : [a, b] \to \mathbb{C}$ 是 Lebesgue 可测的。则对任意 $\varepsilon > 0$，存在**紧集** $E \subseteq [a, b]$ 使

$$\mu(E^c) < \varepsilon,\text{ 且} f|_E\text{ 连续}$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.approximation-L1`](../nodes/thm.approximation-L1.md) L¹ 里的逼近 + [`thm.egorov`](../nodes/thm.egorov.md) Егоров 定理：简单函数逼近 + Egorov $\implies$ Lusin　[proofs/imp.lusin.md](../proofs/imp.lusin.md)

refs: Folland, Real Analysis, Theorem 2.34

> 说明见 `notes/cor.lusin.md`

引用：`cor.lusin`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
