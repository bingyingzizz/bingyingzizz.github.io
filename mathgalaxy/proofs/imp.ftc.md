# $(a) \iff (b) \iff (c)$：微积分基本定理的三条等价
`imp.ftc` · 推出 · strong 边 · 根 `../`

`lem.ac-subset-bv` AC ⊆ BV + `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续 + `prop.nbv-derivative` NBV 函数的导数与测度的关系 → `thm.ftc-lebesgue` 微积分基本定理（Lebesgue 版）

**$(a) \implies (b)$。** 设 $F$ 绝对连续。由**$AC \subseteq BV$**，$F \in BV$；把它补成 NBV 里的函数（差一个常数与右连续化，不影响导数的积分）。由**绝对连续 $\iff \mu _F \ll m$**，写 Lebesgue 分解时奇异部分 $\lambda = 0$，于是 $d\mu_F = f\cdot dm$，即

$$F(x) - F(a) = \int_a^x f(t) dt$$

取 $f$ 就是所要的 $L^{1}$ 函数。

> 续见 proofs/imp.ftc.2.md
