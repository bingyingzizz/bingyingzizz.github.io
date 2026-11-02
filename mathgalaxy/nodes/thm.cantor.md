# Cantor 定理　`thm.cantor`
Cantor 定理：$|A| < |\mathcal{P}(A)|$
layer 9 · 定理 · 基数与等势 · 集合论
[在星图里打开](../#n=thm.cantor)　·　[节点索引](../index.md)

对任意集合 $A$：

$$|A| < |\mathcal{P}(A)|$$

也就是说：**不存在**从 $A$ 到 $\mathcal{P}(A)$ 的满射（当然也不存在双射），但 $a \mapsto \{a\}$ 是单射。

## 为什么成立（入边，证明在 proofs/）
- [`def.power-set`](../nodes/def.power-set.md) 幂集 𝒫(X)：幂集 $\implies$ Cantor 定理（对角线法）　[proofs/imp.cantor.md](../proofs/imp.cantor.md)

- …另有入边，续页见 [nodes/thm.cantor.2.md](./thm.cantor.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.real-uncountable`](../nodes/thm.real-uncountable.md) ℝ 不可数 用

refs: Kunen, Set Theory, I.6

外部：Wikipedia https://en.wikipedia.org/wiki/Cantor%27s_theorem · nLab https://ncatlab.org/nlab/show/Cantor%27s+theorem

> 说明见 `notes/thm.cantor.md`

引用：`thm.cantor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
