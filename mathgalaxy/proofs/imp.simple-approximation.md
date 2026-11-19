# imp.simple-approximation
`imp.simple-approximation` · 推出 · strong 边 · 根 `../`

`def.simple-function` 简单函数 + `def.pointwise-convergence` 逐点收敛 + `def.uniform-convergence` 一致收敛 + `def.measurable-function` 可测函数 → `thm.simple-approximation` 简单函数逼近

**证明。**
**(a)** 对 $n \ge 1$、$k = 0, 1, \ldots, 2^{n}n - 1$ 令
$$E_{n,k} := f^{-1}\bigl((k2^{-n}, (k+1)2^{-n}]\bigr), \qquad F_{n} := f^{-1}\bigl((n, +\infty]\bigr),$$
$$\varphi_{n} := \sum_{k} k\,2^{-n}\,\chi_{E_{n,k}} \;+\; n\,\chi_{F_{n}} \;+\; 0\cdot\chi_{f^{-1}(\{0\})}.$$
- **简单**：每个 $E_{n,k}$、$F_{n}$ 可测（$f$ 可测 + 区间是 Borel 集），只有有限多个取值 ✓；
- **$0 \le \varphi_{n} \le f$**：在 $E_{n,k}$ 上 $k2^{-n} < f \le (k+1)2^{-n}$ ✓；在 $F_{n}$ 上 $n < f$ ✓；其余为零 ✓；
- **单调**：$n \to n+1$ 时区间按 $2^{-(n+1)}$ 加细、上限从 $n$ 升到 $n+1$，逐点算一遍即知 $\va

> 续见 proofs/imp.simple-approximation.2.md
