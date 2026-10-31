# 万有系数定理　`thm.universal-coefficients`　·　说明
根 `../`

**证明（两条张量后的正合列，再比核与像）。** 记 $Z_{n} := \ker d_{n}$、$B_{n} := \operatorname{im} d_{n+1}$，于是 $H_{n}(C) = Z_{n}/B_{n}$。有两个短正合列
$$0 \to Z_{n} \to C_{n} \to B_{n-1} \to 0 , \qquad 0 \to B_{n} \to Z_{n} \to H_{n}(C) \to 0 .$$
主理想整环上 $C_{n}$ 自由，故 $Z_{n}$、$B_{n-1}$ 都**自由**（自由模的子模自由），于是第一条**分裂**，张量 $A$ 后仍正合；又自由 $\implies$ 平坦，故 $\operatorname{Tor}_{1}^{R}(Z_{n}, A) = \operatorname{Tor}_{1}^{R}(B_{n}, A) = 0$ ✓。
**① 算中间的分子。** 把第一条张量 $A$ 后正合，得 $Z_{n}\otimes A \to C_{n}\otimes A$ 单、其像为 $\ker\bigl(C_{n}\otimes A \to B_{n-1}\otimes A\bigr)$，于是
$$H_{n}(C\otimes A) = \frac{\ker\bigl(Z_{n}\otimes A \to B_{n-1}\otimes A\bigr)}{\operatorname{im}\bigl(B_{n}\otimes A \to Z_{n}\otimes A\bigr)} .$$
**② 两个端点。** 把第二条张量 $A$（用 $\operatorname{Tor}_{1}(Z_{n},A) = 0$ 与 $\operatorname{Tor}_{0} = \otimes$

> 续见 notes/thm.universal-coefficients.2.md
