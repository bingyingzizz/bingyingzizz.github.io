# Cauchy 中值定理 $\implies$ L'Hôpital 法则
`imp.lhopital` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.lhopital` L'Hôpital 法则

先讲 $0/0$ 型在 $x \to x_0^{+}$ 的情形。把 $f, g$ 在 $x_0$ 处补充定义为 $f(x_0) = g(x_0) = 0$，则它们在 $[x_0, x]$ 上连续、在 $(x_0, x)$ 内可导。对区间 $[x_0, x]$ 用 Cauchy 中值定理：存在 $\xi \in (x_0, x)$ 使

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(\xi)}{g'(\xi)}$$

当 $x \to x_0^{+}$ 时 $\xi \to x_0^{+}$，故右端的极限就是 $\lim_{x \to x_0^{+}} f'(x) / g'(x)$。左邻域与双侧的情形同法。

$\infty/\infty$ 型要多一步：对给定的 $\varepsilon > 0$，先用 $g$ 在 $x_0$ 附近的单调性挑一个 $x_1$，把 $|g|$ 压得足够大，再用 Cauchy 中值定理处理 $[x_1, x]$，最后让 $x_1 \to x_0$。∎

> 注意证明里 $\xi$ **依赖**于 $x$ —— 但这不妨碍取极限，因为 $x \to x_0$ 时 $\xi$ 被夹在 $x_0$ 与 $x$ 之间，必然也趋于 $x_0$。
