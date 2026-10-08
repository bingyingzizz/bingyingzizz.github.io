# Cantor 定理　`thm.cantor`
Cantor 定理：$|A| < |\mathcal{P}(A)|$
layer 9 · 定理 · 基数与等势 · 集合论

对任意集合 $A$：

$$|A| < |\mathcal{P}(A)|$$

也就是说：**不存在**从 $A$ 到 $\mathcal{P}(A)$ 的满射（当然也不存在双射），但 $a \mapsto \{a\}$ 是单射。

## 为什么成立（入边，证明在 proofs/）
- `def.power-set` 幂集 𝒫(X)：幂集 $\implies$ Cantor 定理（对角线法）　proofs/imp.cantor.md
- `def.cardinal` 基数 |A|：用到了定义 基数 |A|　proofs/dep.cardinal-cantor.md
- `def.power-set` 幂集 𝒫(X)：用到了定义 幂集 𝒫(X)　proofs/dep.powerset-cantor.md

## 它能推出什么 / 谁在用它
- 被 `thm.real-uncountable` ℝ 不可数 用

refs: Kunen, Set Theory, I.6

> 说明见 `notes/thm.cantor.md`
