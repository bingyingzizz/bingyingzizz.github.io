# imp.comparison-theorem
`imp.comparison-theorem` · 推出 · strong 边 · 根 `../`

`def.resolution` 消解 + `def.projective-object` 投射 / 内射对象 + `def.chain-homotopy` 链同伦 → `thm.comparison-theorem` 比较定理

**（二）同伦唯一性：同样的抬升，目标换成「同伦方程」。** 记 $\Delta_{n} := \varphi_{n} - \psi_{n}$。
$n = 0$：$\varepsilon_{Q}\Delta_{0} = f\varepsilon_{P} - f\varepsilon_{P} = 0$，故 $\operatorname{im}\Delta_{0} \subseteq \ker\varepsilon_{Q} = \operatorname{im} e_{1}$ ✓，沿 $Q_{1} \twoheadrightarrow \operatorname{im} e_{1}$ 抬升得 $s_{0}$，即 $e_{1}s_{0} = \Delta_{0}$ ✓。
归纳步：设 $s_{0}, \ldots, s_{n-1}$ 已使 $\Delta_{k} = e_{k+1}s_{k} + s_{k-1}d_{k}$（$k < n$）。令 $\Delta_{n}^{\circ} := \Delta_{n} - s_{n-1}d_{n}$，则
$$e_{n}\Delta_{n}^{\circ} = e_{n}\Delta_{n} - \bigl(\Delta_{n-1} - s_{n-2}d_{n-1}\bigr)d_{n} = \big

> 续见 proofs/imp.comparison-theorem.4.md
