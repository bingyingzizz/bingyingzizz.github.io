# $(a) \iff (b) \iff (c)$：微积分基本定理的三条等价
`imp.ftc` · 推出 · strong 边 · 根 `../`

`lem.ac-subset-bv` AC ⊆ BV + `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续 + `prop.nbv-derivative` NBV 函数的导数与测度的关系 → `thm.ftc-lebesgue` 微积分基本定理（Lebesgue 版）

**$(b) \implies (c)$。** 若 $F(x) - F(a) = \int_a^x f$，则由积分的绝对连续性，$F$ 绝对连续（这是直接验证）；而由**微分定理**，$d / dx\int_a^x f = f(x)$ a.e.，故 $F' = f$ a.e.、$F' \in L^1$，公式成立。

**$(c) \implies (a)$。** 由 (c)，$F$ 在 a.e. 意义下等于一个积分的原函数；把 $F(x) - \int_a^x F'$ 这个差记作 $G$，则 $G$ 绝对连续（$(b) \implies F$ 的那一段）且 $G' = 0 \text{a.e.}$；再由 (b) 的构造（$\mu _G \ll m$ 且密度为 $F' - F' = 0$）得 $G \equiv 0$。故 $F$ 本身绝对连续。∎

> 续见 proofs/imp.ftc.3.md
