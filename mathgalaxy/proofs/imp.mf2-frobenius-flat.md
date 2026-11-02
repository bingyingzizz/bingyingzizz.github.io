# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

证 (1)$\implies$(2)。对 $k$ 归纳。$k = 0$ 时 $\mathcal{D} = 0$，任意坐标都平坦。设 $k \ge 1$，$p \in M$ 任意。

**第一步：把第一个生成元拉直。** 取 $p$ 附近处处非零的生成元 $X_{1}$（由光滑性，$k \ge 1$ 时局部总有）。用 `thm.flow-local` 的局部流 $\varphi_{t}$：取过 $p$ 的横截超曲面 $H$（$\dim H = n-1$，与 $X_{1}(p)$ 横截），则

$$\Psi(t, q) := \varphi_{t}(q)\qquad (q \in H,\ |t| < \varepsilon)$$

在 $p$ 附近是微分同胚（$\mathrm{d}\Psi$ 在 $(0,p)$ 处满秩），于是可以取坐标 $y^{1} := t$、$y^{2},\ldots,y^{n}$ 为 $H$ 上的坐标。由构造 $\partial_{1} = X_{1}$，即 $X_{1}$ 已拉直。

> 续见 proofs/imp.mf2-frobenius-flat.2.md
