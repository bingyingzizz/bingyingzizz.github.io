# imp.finite-integral-consequences
`imp.finite-integral-consequences` · 推出 · strong 边 · 根 `../`

`def.lplus` 非负可测函数类 + `def.null-set` 零集与完备 + `def.measure-space` 有限 / σ-有限 / 半有限 → `prop.finite-integral-consequences` 积分有限的后果

**证明。** 设 $f \in L^{+}$、$\int f < \infty$。
- **$\{f = +\infty\}$ 是零集**：若 $\mu(\{f = \infty\}) > 0$，则对每个 $n$ 有 $n\,\chi_{\{f=\infty\}} \le f$，故 $\int f \ge n\,\mu(\{f=\infty\}) \to \infty$，与 $\int f < \infty$ 矛盾 ✓。
- **$\{f > 0\}$ 是 $\sigma$ 有限**：
$$\{f > 0\} = \bigcup_{n \ge 1}\bigl\{f > \tfrac1n\bigr\},$$
而由 $\frac1n\chi_{\{f>1/n\}} \le f$ 得 $\mu(\{f > 1/n\}) \le n\int f < \infty$，所以这是一族可数多个**有限测度**集之并，即 $\sigma$ 有限 ✓。∎
