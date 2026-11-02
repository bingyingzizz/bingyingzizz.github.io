# Fatou $\implies$ 控制收敛定理
`imp.dct` · 推出 · strong 边 · 根 `../`

`lem.fatou` Fatou 引理 → `thm.dct` 控制收敛定理

设 $f_n \to f$ a.e.，$|f_n| \le g \in L^1$。

**① $f \in L^{1}$。** 由 $|f| = \lim|f_n| \le g$（a.e.）得 $f$ 可积。

**② 上界方向：$\limsup_n \int f_n \le \int f$。** 考虑 $g - f_n \ge 0$（因为 $|f_{n}| \le g$）。这列非负函数满足

$$g - f_n \to g - f\quad  \text{a.e.}$$

对它用 Fatou 引理：

$$\int (g - f) \le \liminf_n \int (g - f_n) = \int g - \limsup_n \int f_n$$

（最后一步是因为 $\liminf_{-a_n} = -\limsup a_n$。）移项即得 $\limsup_n \int f_n \le \int f$。

**③ 下界方向：$\liminf_n \int f_n \ge \int f$。** 同样对 $g + f_n \ge 0$ 用 Fatou：

$$\int (g + f) \le \liminf_n \int (g + f_n) = \int g + \liminf_n \int f_n$$

移项得 $\liminf_n \int f_n \ge \int f$。

> 续见 proofs/imp.dct.2.md
