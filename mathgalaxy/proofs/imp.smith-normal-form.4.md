# PID 上的 gcd 消元 $\implies$ Smith 标准形
`imp.smith-normal-form` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.equivalent-matrices` 相抵矩阵（等价矩阵） → `thm.smith-normal-form` Smith 标准形

若余下的 $(m-1) \times (n-1)$ 子块有元素 $c$ 不被 $a$ 整除（设它在第 $j$ 列），把 $c$ 所在行加到第一行：$(1,1)$ 仍是 $a$，而 $(1,j)$ 变成 $c$，这与 $(a)$ 的极大性矛盾（上一段的论证说明：第一行一旦出现不被 $a$ 整除的元素，就能把 $(1,1)$ 换成 $\gcd(a,c)$）。故 $a$ 整除整个余块。对余块归纳，得 $\operatorname{diag}(a, d_2, \ldots, d_r, 0)$；因为 $a$ 整除余块的所有元素，故 $a \mid d_2$，归纳假设给出整除链。

> 续见 proofs/imp.smith-normal-form.5.md
