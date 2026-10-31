# 外测度 + 可切集 $\implies$ σ-代数与完备测度
`imp.outer-carath` · 推出 · strong 边 · 根 `../`

`def.outer-measure` 外测度 + `def.caratheodory-measurable` μ*-可测集 → `thm.caratheodory` Carathéodory 定理

**③ $\mu^{*}|_\mathcal{M}$ 可加。** 在 ② 里取 $E = X$、$A$ 换成两两不交的 $A_{j}$，得 $\mu^{*}(\bigcup A_{j}) = \sum \mu^{*}(A_{j})$，这正是可数可加；$\mu^{*}(\emptyset ) = 0$ 由外测度定义给出。

**④ 完备。** 设 $\mu^{*}(A) = 0$，$B \subseteq A$。对任意 $E$，由单调性与次可加，

$$\mu^*(E) \ge \mu^*(E \cap B^c) \ge \mu^*(E) - \mu^*(E \cap B) \ge \mu^*(E) - \mu^*(A) = \mu^*(E)$$

故 $\mu^{*}(E) = \mu^{*}(E\cap B) + \mu^{*}(E\cap B^{c})$（注意 $\mu^{*}(E\cap B) \le \mu^{*}(A) = 0$），即 $B \in \mathcal{M}$。故 $\mu^{*}|_\mathcal{M}$ 完备。∎

$>$ 这一条是纯验证，但要验的东西不少，上面把要点写全了。
