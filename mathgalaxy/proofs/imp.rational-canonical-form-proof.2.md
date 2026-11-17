# imp.rational-canonical-form-proof
`imp.rational-canonical-form-proof` · 推出 · strong 边 · 根 `../`

`def.companion-matrix` 友矩阵 + `def.cyclic-subspace` 循环子空间 + `thm.pid-fg-module-structure` PID 上有限生成模的结构 + `thm.cayley-hamilton` Cayley–Hamilton 定理 + `thm.smith-normal-form` Smith 标准形 + `def.invariant-factor` 不变因子 → `thm.rational-canonical-form` 有理标准形

对每个循环模 $K[x]/(d)$，记 $d=x^m+a_{m-1}x^{m-1}+\cdots+a_0$，取 $K$-基 $1,x,\ldots,x^{m-1}$。乘 $x$ 的矩阵正是友矩阵 $C_d$（`def.companion-matrix`）：$x^m\equiv-(a_0+a_1x+\cdots+a_{m-1}x^{m-1})$ 给出最后一列。把各循环块的基拼起来，$A$ 相似于 $\operatorname{diag}(C_{d_1},\ldots,C_{d_s})$。

> 续见 proofs/imp.rational-canonical-form-proof.3.md
