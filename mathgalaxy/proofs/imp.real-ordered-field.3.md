# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

- $x$ 是零列 $\implies [x] = 0$；
- 否！则由 ② 的估计，从某项起 $|x_n| \ge \delta$；再用 Cauchy 性（取 $\varepsilon = \delta$）知符号最终恒定：若某两项异号则 $|x_m - x_n| \ge 2\delta$，矛盾。于是要么最终 $x_n \ge \delta$（正），要么最终 $x_n \le -\delta$（负）。

序与运算的相容性（$\alpha \le \beta \implies \alpha + \gamma \le \beta + \gamma$；$\alpha \ge 0, \beta \ge 0 \implies \alpha\beta \ge 0$）都逐项验证。

**④ 嵌入与稠密。** $x \mapsto [(x,x,x,\ldots)]$ 是保序、保运算的单射。稠密：若 $\alpha < \beta$，取代表元 $x \in \alpha$、$y \in \beta$ 与正有理数 $q$ 使最终 $x_n + q \le y_n$，则由 $\mathbb{Q}$ 的稠密性可取有理数 $r$ 夹在中间，常数列 $r$ 满足 $\alpha < [r] < \beta$。

> 续见 proofs/imp.real-ordered-field.4.md
