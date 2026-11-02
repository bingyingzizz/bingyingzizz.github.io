# 有界 + 确界原理 $\implies$ 取到最值
`imp.bounded-evt` · 推出 · strong 边 · 根 `../`

`prop.continuous-bounded-on-compact` 紧集上连续 ⟹ 有界 + `thm.real-ordered-field` ℝ 是完备有序域 → `thm.evt` 最值定理

1. 对每个 $n \ge 1$，$M - 1/n$ 不是 $f(X)$ 的上界，所以存在 $x_n \in X$ 使 $f(x_n) > M - 1/n$。
2. $X$ 紧 $\implies$ 列紧（见「紧的三个等价刻画」），所以 $\{x_n\}$ 有子列 $x_{n_k} \to x^{*} \in X$。
3. $f$ 连续 $\implies$ $f(x_{n_k}) \to f(x^{*})$；另一方面由第 1 步 $f(x_{n_k}) \to M$（夹逼：$M - 1/n_k < f(x_{n_k}) \le M$）。极限唯一，故 $f(x^{*}) = M$。
4. 于是 $f(x^{*}) = M = \sup f(X) \ge f(x)$ 对一切 $x \in X$ 成立，即 $x_{\max} = x^{*}$。

把 $f$ 换成 $-f$ 得最小值。∎

> 第 3 步的两个极限必须都存在才能用「极限唯一」：左式的存在性来自连续性，右式来自 $\sup$ 的定义。紧性只在第 2 步用了一次。
