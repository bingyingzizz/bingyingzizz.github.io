# 依测度 Cauchy $\implies$ 依测度收敛且有一子列 a.e. 收敛
`imp.cauchy-in-measure` · 推出 · strong 边 · 根 `../`

`def.cauchy-in-measure` 依测度 Cauchy → `thm.cauchy-in-measure` 依测度 Cauchy ⟹ 收敛

**④ 造极限 $f$。** 令 $F = \bigcap_k F_k^c$，则

$$\mu(F) = \mu(X \setminus \bigcup_k F_k) \ge \mu(X) - \mu(F_k)\quad  \forall k\quad  \implies\quad  \mu(F^c) = 0$$

在 $F$ 上令 $f(x) = \lim_j g_j(x)$，在 $F^c$ 上任取 0。$f$ 是可测函数（可测函数的极限）。于是 $g_j \to f$ **a.e.**

**⑤ 换成依测度。** 取定 $k$，对 $j \ge k$、$x \in F_k^c$ 有 $|g_j(x) - f(x)| \le 2^{1-j}$。于是对任意 $\delta > 0$，

$$\mu(\{|g_j - f| > \delta\}) \le \mu(F_k) \le 2^{1-k}\quad  (j\text{ 充分大})$$

令 $k \to \infty$ 得 $g_j \to f$ 依测度。

**⑥ 把 $f_{n}$ 也拉进来。** 对任意 $\varepsilon > 0$，

> 续见 proofs/imp.cauchy-in-measure.3.md
