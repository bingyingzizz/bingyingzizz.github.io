# 列紧性 + 一致连续的定义 $\implies$ Cantor 定理
`imp.uniform-compact` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass + `def.uniform-continuity` 一致连续 → `thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续

1. $X$ 紧 $\implies$ 列紧，故 $\{x_n\}$ 有子列 $x_{n_k} \to x^{*} \in X$。
2. 由 $d(x_{n_k}, x_{n_k}') < 1/n_k \to 0$ 与三角不等式，$x_{n_k}' \to x^{*}$ 也成立。
3. $f$ 在 $x^{*}$ 连续，所以 $f(x_{n_k}) \to f(x^{*})$ 且 $f(x_{n_k}') \to f(x^{*})$。
4. 于是 $|f(x_{n_k}) - f(x_{n_k}')| \le |f(x_{n_k}) - f(x^{*})| + |f(x^{*}) - f(x_{n_k}')| \to 0$，与它恒 $\ge \varepsilon_0$ 矛盾。∎

> 这个证明的骨架是「把一致性失败翻译成两列点」，这正是紧性最擅长处理的形式 —— 同样的套路在「紧集上连续函数取到最值」「紧算子」里反复出现。
