# 开映射定理　`thm.open-mapping`　·　说明
根 `../`

**证明**：取 $z_{0} \in \Omega$、$w_{0} := f(z_{0})$，只需证 $w_{0}$ 是 $f(\Omega)$ 的内点。不妨 $w_{0} = 0$（平移）。由 `prop.zero-isolated`，$z_{0}$ 是 $f$ 的孤立零点、阶为 $m \ge 1$，故在 $z_{0}$ 的某邻域内 $f$ 只有 $z_{0}$ 一个零点，且可取小圆 $|z - z_{0}| = \rho$ 使 $f$ 在其上不为零，令 $\delta := \min_{|z - z_{0}| = \rho}|f(z)| > 0$。

现在任取 $|w| < \delta$，比较 $f$ 与常值 $-w$：在圆周上 $|f(z)| \ge \delta > |w| = |{-w} - f(z) + f(z)|$… 更直接地，在圆周上 $|f(z) - (-w)| \ge |f(z)| - |w| > 0$，而 $f$ 与 $-w$ 在圆内零点个数由 **Rouché 定理**（`thm.rouche`）比较：$|f| > |{-w} - f|$ 在圆周上成立时两者零点数相同。$f$ 在圆内有 $m \ge 1$ 个零点（按阶计），所以 $f + w$ 在圆内也有零点，即 $w = -f(z)$ 被取到。故 $B(0, \delta) \subseteq f(\Omega)$，$w_{0}$ 是内点。∎

> 续见 notes/thm.open-mapping.2.md
