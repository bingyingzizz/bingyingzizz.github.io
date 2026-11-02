# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

记 $\mathcal{C}$ 为有理 Cauchy 列的全体。下面把 $\mathbb{R} := \mathcal{C}/\sim$ 逐条查一遍。

**① 运算良定义。** 设 $x \sim x'$、$y \sim y'$（即 $x_n - x'_n$、$y_n - y'_n$ 都是零列）。

加法：$|(x_n + y_n) - (x'_n + y'_n)| \le |x_n - x'_n| + |y_n - y'_n| \to 0$（三角不等式）。

乘法：$x_n y_n - x'_n y'_n = x_n (y_n - y'_n) + y'_n (x_n - x'_n)$，而 Cauchy 列**有界**（设 $|x_n| \le M$、$|y'_n| \le M'$），故两项各自 $\to 0$。

**② 域公理。** 结合、交换、分配都是逐项验证后取等价类（$\mathbb{Q}$ 满足，$\mathcal{C}$ 对 $+$、$\cdot$ 封闭）。零元 $0 := [$零列$]$、一 $1 := [(1,1,1,\ldots)]$。

**乘法逆元**是唯一需要想法的地方：设 $x$ 不是零列。因 $x$ 是 Cauchy 列，「不是零列」意味着

$$\exists \varepsilon > 0: \forall N, \exists n \ge N,\ |x_n| \ge \varepsilon$$

> 续见 proofs/imp.real-ordered-field.2.md
