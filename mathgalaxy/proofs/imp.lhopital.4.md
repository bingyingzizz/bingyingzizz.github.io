# Cauchy 中值定理 $\implies$ L'Hôpital 法则
`imp.lhopital` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.lhopital` L'Hôpital 法则

⚠️ 顺序不能颠倒：① 的因子是 $1 - g(y)/g(x)$ 而**不是** $1$，所以必须「**先定 $y$、再让 $x \to x_0^{+}$**」；反过来先放 $x \to x_0$ 就没有可用的界（$g(y)$ 会跟着动）。

> 注意证明里 $\xi$ **依赖**于 $x$ —— 但这不妨碍取极限，因为 $x \to x_0$ 时 $\xi$ 被夹在 $x_0$ 与 $x$ 之间，必然也趋于 $x_0$。
