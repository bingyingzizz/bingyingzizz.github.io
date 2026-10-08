# 集合版（截口公式）+ MCT $\implies$ Tonelli
`imp.tonelli` · 推出 · strong 边 · 根 `../`

`thm.product-measure-sections` 乘积测度由截口给出 + `thm.mct` 单调收敛定理 → `thm.fubini-tonelli` Fubini–Tonelli

$$\int_X ( \int_Y f d\nu ) d\mu = \lim_n \int f_n d(\mu \times \nu) = \int f d(\mu \times \nu)$$

（最后一步又用一次 MCT。）另一边对称。**这就是 Tonelli，全程不需要可积性。**

**④ Fubini。** 设 $f \in L^1(\mu \times \nu)$。把 $f$ 拆成 $\operatorname{Re} f^+, \operatorname{Re} f^-, \operatorname{Im} f^+, \operatorname{Im} f^-$ 四个非负部分，对每一部分用 ③。由

$$\int |f| d(\mu \times \nu) < \infty$$

和 ③ 的三重等式，得到 $\int_X (\int_Y |f| d\nu) d\mu < \infty$，故 $\int_Y |f(x, \cdot)| d\nu < \infty$ 对 **a.e.** $x$ 成立 —— 即 $f_x \in L^1(\nu)$ a.e.；同理 $f^y \in L^1(\mu)$ a.e.。既然两个累次积分都已经是有限数，就可以直接相减、不再有 $\infty - \infty$ 的危险，三重等式对 $f$ 成立。∎

> 续见 proofs/imp.tonelli.3.md
