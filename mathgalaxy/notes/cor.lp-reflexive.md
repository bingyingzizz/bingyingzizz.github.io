# L^p 自反　`cor.lp-reflexive`　·　说明
根 `../`

**证明。** 设 $1 < p < \infty$，$q$ 是共轭指数（$\frac1p+\frac1q = 1$，于是也有 $1 < q < \infty$）。
- 由「$L^{p}$ 的对偶是 $L^{q}$」（Riesz 表示）：$(L^{p})^{*} \cong L^{q}$ ✓；
- 把同一条定理用在 $q$ 上：$(L^{q})^{*} \cong L^{p}$ ✓；
- 于是
$$(L^{p})^{**} \cong (L^{q})^{*} \cong L^{p},$$
即 $L^{p}$ **自反** ✓。∎
⚠️ $p = 1$ 与 $p = \infty$ 时**不**自反：$(L^{1})^{*} \cong L^{\infty}$，而 $(L^{\infty})^{*}$ 严格大于 $L^{1}$（有非绝对连续的函数）✓。
⭐ 自反的价值：自反 Banach 空间里**有界序列必有弱收敛子列**（Eberlein–Šmulian），这是 $L^{p}$ 上变分 / 存在性论证的常用工具。

把对偶定理用两次即可：$(L^p)^* \cong L^q$，而 $q$ 的共轭又回到 $p$，故 $(L^p)^{**} \cong (L^q)^* \cong L^p$。

⚠ $p = 1$ 与 $p = \infty$ 时**不**自反。

⭐ 自反性的价值：自反 Banach 空间里**有界序列必有弱收敛子列**（Banach–Alaoglu / Eberlein–Šmulian），这是变分法与 PDE 里取极限的基本工具。
