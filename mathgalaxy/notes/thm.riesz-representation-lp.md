# (L^p)* ≅ L^q　`thm.riesz-representation-lp`　·　说明
根 `../`

⭐ 这是 $L^p$ 理论的高潮：**$L^p$ 上的每一个连续线性泛函，都只是「乘一个 $L^q$ 函数再积分」**。

$p = 1$、$\mu$ $\sigma$有限时结论同样成立（$(L^1)^* \cong L^\infty$）；

⚠ 但 $p = \infty$ 时**不成立**：$(L^\infty)^*$ 严格大于 $L^1$（存在不是由 $L^1$ 函数给出的有界线性泛函，比如在 $C[0,1]$ 上调 Hahn–Banach 得到的那些）。

证明思路（见右侧箭头）：先把 $\Phi$ 变成一个复测度（$\nu(E) := \Phi(\chi_E)$），再用 Radon–Nikodym 把它写成 $\int \cdot \, g \, d\mu$，最后验证 $g \in L^q$。
