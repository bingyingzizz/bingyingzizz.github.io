# imp.integral-zero-iff
`imp.integral-zero-iff` · 推出 · strong 边 · 根 `../`

`def.null-set` 零集与完备 + `def.ae` 几乎处处 → `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零

**证明。**
**$(\Longleftarrow)$** 若 $f = 0$ a.e.，则任何简单函数 $\varphi \le f$ 也 a.e. 为零（在 $f = 0$ 处 $\varphi = 0$），故 $\int \varphi = 0$；对全体这样的 $\varphi$ 取上确界得 $\int f = 0$ ✓。
**$(\implies)$** 设 $\int f = 0$。对每个 $n \ge 1$ 记 $A_{n} := \{f > 1/n\}$（可测）。由 $\frac1n\chi_{A_{n}} \le f$ 得
$$\frac1n\,\mu(A_{n}) \le \int f\,\mathrm{d}\mu = 0 \implies \mu(A_{n}) = 0 .$$
而 $\{f > 0\} = \bigcup_{n \ge 1} A_{n}$ 是可数并零集，故 $\mu(\{f>0\}) = 0$，即 $f = 0$ a.e. ✓。∎
