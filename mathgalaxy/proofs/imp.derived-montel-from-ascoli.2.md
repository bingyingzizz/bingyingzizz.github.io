# Arzelà–Ascoli 在全纯函数族上就是 Montel 定理
`imp.derived-montel-from-ascoli` · 推出 · strong 边 · 根 `../`

`thm.arzela-ascoli` Arzelà–Ascoli 定理 + `thm.cauchy-inequality` Cauchy 不等式 → `thm.montel` Montel 定理

- **一致有界**：$|f| \le M$ 在 $K$ 上；
- **等度连续**：将 Cauchy 不等式（$n = 1$、半径 $\rho/2$）作用在 $K$ 的各点的小圆盘上，得 $|f^{\prime}| \le 2M/\rho$ 在 $K$ 上对**一切** $f \in \mathcal{F}$ 同时成立；中值不等式遂给 $|f(x) - f(y)| \le (2M/\rho)\,|x - y|$，$\delta = \varepsilon \rho/(2M)$ 与 $f$ 无关。

**② 用 Arzelà–Ascoli。** $K$ 是紧距离空间，对上式那族 $\{ f_{n}|_{K} \}$ 用 Arzelà–Ascoli：存在子列在 $K$ 上一致收敛。

> 续见 proofs/imp.derived-montel-from-ascoli.3.md
