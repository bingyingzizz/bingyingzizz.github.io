# 乘积测度通常不完备 $\implies$ 必须补一条完备情形的 F–T
`imp.fubini-complete` · 推出 · strong 边 · 根 `../`

`thm.fubini-tonelli` Fubini–Tonelli + `thm.completion` 完备化定理 + `prop.product-incomplete` 乘积测度通常不完备 → `thm.fubini-complete` 完备情形的 F–T

**① 先证 $f \ge 0$ 的情形。** 由于 $\lambda$ 是 $\mu \times \nu$ 的完备化，$\mathcal{L}$ 中的集合可以写成

$$E = F \cup G, \quad  F \in \mathcal{M} \otimes  \mathcal{N}, \quad  G \subseteq H, \quad  \mu \times \nu(H) = 0$$

（取不交化后即 $E = F \sqcup  G$，于是 $\chi_E = \chi_F + \chi_G$。）

**② $\chi_F$ 那一半没问题** —— 直接归 Fubini–Tonelli（$F \in \mathcal{M}\otimes\mathcal{N}$）。

**③ $\chi_G$ 那一半也没问题** —— 因为 $G \subseteq H$ 而 $\mu \times \nu (H) = 0$，所以对**每一个** $x$ 都有 $\nu(G_x) \le \nu(H_x) = 0$（$H$ 的截口是 $\nu$零集，这一步用截口公式对 $H$ 本身成立），于是

> 续见 proofs/imp.fubini-complete.2.md
