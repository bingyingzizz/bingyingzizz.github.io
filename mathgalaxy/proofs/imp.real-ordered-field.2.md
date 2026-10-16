# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

取这样的 $\varepsilon$，并用 Cauchy 性取 $N_0$ 使 $m, n \ge N_0$ 时 $|x_m - x_n| < \varepsilon/2$；再取 $n_0 \ge N_0$ 使 $|x_{n_0}| \ge \varepsilon$。则对一切 $n \ge N_0$：

$$|x_n| \ge |x_{n_0}| - |x_n - x_{n_0}| > \varepsilon - \varepsilon/2 = \varepsilon/2$$

于是定义 $y_n := 0$（$n < N_0$）、$y_n := 1/x_n$（$n \ge N_0$）。$y$ 是 Cauchy 列，因为

$$|y_m - y_n| = \frac{|x_m - x_n|}{|x_m|\,|x_n|} \le \frac{4}{\varepsilon^2}\,|x_m - x_n|$$

而 $[x_n y_n] = [(1,1,1,\ldots)] = 1$。故每个非零元可逆。

**③ 序良定义 + 全序。** $(y_n - x_n)$ 换成等价的代表元后仍是零列的平移，故「$> 0$」的定义与代表元无关。三种情形恰有一种成立：

> 续见 proofs/imp.real-ordered-field.3.md
