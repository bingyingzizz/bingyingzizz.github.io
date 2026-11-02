# 解析环的定义 $\implies$ 模范畴是阿贝尔的
`imp.analytic-modules` · 推出 · strong 边 · 根 `../`

`def.analytic-ring` 解析环 + `lem.solid-completion-criterion` 完备化判据 → `thm.analytic-modules` 解析环上的模

这是 `lem.solid-completion-criterion` 的直接应用：取 $\mathcal{A} = \operatorname{Mod}^{\mathrm{cond}}_{A}$、$\mathcal{A}_0 = \{A[S]\}$（$S$ extremally disconnected）、$F(A[S]) = \mathcal{A}[S]$。

解析环的定义（`def.analytic-ring`）正是该引理的假设：对由 $\mathcal{A}[T]$ 的直和构成的复形 $C$，$\operatorname{RHom}(\mathcal{A}[S], C) \cong \operatorname{RHom}(A[S], C)$。

于是引理 (i) 给出阿贝尔子范畴、紧投射生成元与左伴随；引理 (ii) 给出导出范畴的全忠实与左伴随。$\blacksquare$
