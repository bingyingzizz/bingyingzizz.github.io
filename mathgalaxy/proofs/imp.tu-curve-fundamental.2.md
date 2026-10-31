# Frenet 方程是线性 ODE $\implies$ 曲线基本定理
`imp.tu-curve-fundamental` · 推出 · strong 边 · 根 `../`

`thm.frenet-serret` Frenet–Serret 公式 → `thm.curve-fundamental-theorem` 曲线基本定理

**造曲线。** 取解的第一行 $T$，令 $\gamma(s) := \gamma(s_{0})+\int_{s_{0}}^{s}T(u)\,\mathrm{d}u$。则 $\gamma' = T$ 是单位向量，故 $\gamma$ 弧长参数化；由构造 $\gamma'' = T' = \kappa N$，于是曲率是 $\kappa$、主法向是 $N$、副法向是 $T\times N = B$、挠率是 $\tau$。

**唯一性。** 设 $\gamma_{1},\gamma_{2}$ 给出相同的 $(\kappa,\tau)$，对应标架 $X_{1},X_{2}$。取唯一的刚体运动 $g$ 使 $g_{\ast}\bigl(X_{2}(s_{0})\bigr) = X_{1}(s_{0})$ 且 $g\bigl(\gamma_{2}(s_{0})\bigr) = \gamma_{1}(s_{0})$。则 $g\circ\gamma_{2}$ 与 $\gamma_{1}$ 满足同一个 ODE、有相同初值，由解的唯一性两者标架相等，从而曲线相等。∎
