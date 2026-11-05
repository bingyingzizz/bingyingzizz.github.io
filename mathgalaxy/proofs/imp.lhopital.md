# Cauchy 中值定理 $\implies$ L'Hôpital 法则
`imp.lhopital` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.lhopital` L'Hôpital 法则

先讲 $0/0$ 型在 $x \to x_0^{+}$ 的情形。

把 $f, g$ 在 $x_0$ 处补充定义为 $f(x_0) = g(x_0) = 0$，则它们在 $[x_0, x]$ 上连续、在 $(x_0, x)$ 内可导。

对区间 $[x_0, x]$ 用 Cauchy 中值定理：存在 $\xi \in (x_0, x)$ 使

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(\xi)}{g'(\xi)}$$

当 $x \to x_0^{+}$ 时 $\xi \to x_0^{+}$，故右端的极限就是 $\lim_{x \to x_0^{+}} f'(x) / g'(x)$。左邻域与双侧的情形同法。

$\infty/\infty$ 型要多一步（$f, g \to \infty$、$g^{\prime} \ne 0$ 于 $x_0$ 右侧、$\lim f^{\prime}/g^{\prime} = L$ 存在）。

> 续见 proofs/imp.lhopital.2.md
