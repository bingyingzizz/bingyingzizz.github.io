# 反常积分的定义 + Cauchy 准则 $\implies$ 比较判敛
`imp.improper-comparison` · 推出 · strong 边 · 根 `../`

`def.improper-integral` 反常积分 + `thm.cauchy-criterion` Cauchy 收敛准则 → `prop.improper-comparison` 反常积分的比较判敛

1. **Cauchy 准则的形式**：$\int_a^{+\infty} f$ 收敛当且仅当对每个 $\varepsilon > 0$ 存在 $R_0$，使 $R_0 < p < q$ 时 $\bigl| \int_p^{q} f \bigr| < \varepsilon$（把数列的 Cauchy 准则用在 $R \mapsto I(R)$ 上，配合区间可加性）。
2. **绝对收敛 $\implies$ 收敛**：若 $\int |f|$ 收敛，则对 $p < q$，$\bigl| \int_p^q f \bigr| \le \int_p^q |f|$，右端由第 1 步可以任意小，故 $\int f$ 收敛。
3. **比较**：设 $|f| \le g$ 近端成立。若 $\int g$ 收敛，则由第 1 步，$\int_p^q |f| \le \int_p^q g$ 也可以任意小，故 $\int |f|$ 收敛，再由第 2 步得 $

> 续见 proofs/imp.improper-comparison.3.md
