# 链式法则 + Newton–Leibniz $\implies$ 换元公式
`imp.substitution` · 推出 · strong 边 · 根 `../`

`thm.ftc-riemann-part2` Newton–Leibniz 公式 → `prop.integration-substitution` 换元积分

设 $\varphi$ 有连续导数，$f$ 连续，并令 $G$ 是 $f$ 的一个原函数（由第一基本定理，$G(x) := \int_{a}^{x} f$ 就是）。则 $G(\varphi(t))$ 对 $t$ 可导，且由链式法则

$$\frac{d}{dt} G\bigl(\varphi(t)\bigr) = G'\bigl(\varphi(t)\bigr)\,\varphi'(t) = f\bigl(\varphi(t)\bigr)\,\varphi'(t)$$

右边的函数连续因而可积。对它在 $[\alpha, \beta]$ 上用 Newton–Leibniz：

$$\int_{\alpha}^{\beta} f\bigl(\varphi(t)\bigr)\varphi'(t)\,dt = G\bigl(\varphi(\beta)\bigr) - G\bigl(\varphi(\alpha)\bigr) = \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,dx$$

最后一步再用一次 Newton–Leibniz（$G$ 是 $f$ 的原函数）。∎

> 两个方向的换元（「凑微分」与「变量替换」）在这一个公式里，因为等式两边可以任意读：从左读是代入，从右读是替换。
