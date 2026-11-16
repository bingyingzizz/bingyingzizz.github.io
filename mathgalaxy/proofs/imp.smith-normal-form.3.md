# PID 上的 gcd 消元 $\implies$ Smith 标准形
`imp.smith-normal-form` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.equivalent-matrices` 相抵矩阵（等价矩阵） → `thm.smith-normal-form` Smith 标准形

。于是用列变换 $C_{j} \leftarrow C_{j} - \frac{a_{1j}}{a} C_{1}$ 清掉第一行、再用行变换 $R_{i} \leftarrow R_{i} - \frac{a_{i1}}{a} R_{1}$ 清掉第一列，且不动 $(1,1)$。

> 续见 proofs/imp.smith-normal-form.4.md
