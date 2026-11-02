# 比较定理　`thm.comparison-theorem`　·　说明
根 `../`

**（二）同伦唯一性：同样的抬升，目标换成「同伦方程」。** 记 $\Delta_{n} := \varphi_{n} - \psi_{n}$。
$n = 0$：$\varepsilon_{Q}\Delta_{0} = f\varepsilon_{P} - f\varepsilon_{P} = 0$，故 $\operatorname{im}\Delta_{0} \subseteq \ker\varepsilon_{Q} = \operatorname{im} e_{1}$ ✓，沿 $Q_{1} \twoheadrightarrow \operatorname{im} e_{1}$ 抬升得 $s_{0}$，即 $e_{1}s_{0} = \Delta_{0}$ ✓。
归纳步：设 $s_{0}, \ldots, s_{n-1}$ 已使 $\Delta_{k} = e_{k+1}s_{k} + s_{k-1}d_{k}$（$k < n$）。令 $\Delta_{n}^{\circ} := \Delta_{n} - s_{n-1}d_{n}$，则
$$e_{n}\Delta_{n}^{\circ} = e_{n}\Delta_{n} - \bigl(\Delta_{n-1} - s_{n-2}d_{n-1}\bigr)d_{n} = \bigl(e_{n}\varphi_{n} - \varphi_{n-1}d_{n}\bigr) - \bigl(e_{n}\psi_{n} - \psi_{n-1}d_{n}\bigr) = 0,$$
于是 $\operatorname{im}\Delta_{n}^{\circ} \subseteq \operatorname{im} e_{n+1}$ ✓，再抬升一次得 $s_{n}$。逐层下去就得到整族同伦 ✓。∎

> 续见 notes/thm.comparison-theorem.3.md
