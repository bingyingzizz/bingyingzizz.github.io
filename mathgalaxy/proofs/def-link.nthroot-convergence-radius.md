# n 次方根的乘性 $\implies$ Cauchy–Hadamard 的拆分一步
`def-link.nthroot-convergence-radius` · 推出 · strong 边 · 根 `../`

`thm.nth-root` n 次方根 → `thm.convergence-radius` 收敛半径

Cauchy–Hadamard 的证明（边 `thm.root-test \implies thm.convergence-radius`）第一步是 $\sqrt[n]{\lvert a_n (x - x_0)^{n}\rvert} = \lvert x - x_0\rvert \cdot \sqrt[n]{\lvert a_n\rvert}$。这一步用的是 $\sqrt[n]{uv} = \sqrt[n]{u}\,\sqrt[n]{v}$（$u,v \ge 0$）：先由 `thm.nth-root` 取非负 $n$ 次方根，再用**唯一性**确认两边相等 —— $\bigl(\sqrt[n]{u}\sqrt[n]{v}\bigr)^{n} = uv$ 且左边非负，故它就是 $uv$ 的那个唯一非负 $n$ 次方根。没有存在唯一性，这个等式无从陈述，$\limsup$ 的乘法性质也用不上。

> AUD-061 A 类。原记 definition；改 imp：拆分那一步确实以方根定理（存在 + 唯一 + 乘性）为引擎。
