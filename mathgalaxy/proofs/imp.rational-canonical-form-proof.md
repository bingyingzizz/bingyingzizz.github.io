# imp.rational-canonical-form-proof
`imp.rational-canonical-form-proof` · 推出 · strong 边 · 根 `../`

`def.companion-matrix` 友矩阵 + `def.cyclic-subspace` 循环子空间 + `thm.pid-fg-module-structure` PID 上有限生成模的结构 + `thm.cayley-hamilton` Cayley–Hamilton 定理 + `thm.smith-normal-form` Smith 标准形 + `def.invariant-factor` 不变因子 → `thm.rational-canonical-form` 有理标准形

把 $V=K^n$ 看成 $K[x]$-模，$x\cdot v=Av$。Cayley–Hamilton 给 $\chi_A(A)=0$，故 $V$ 是挠模；$\dim_KV=n$ 给有限生成。

由 `thm.pid-fg-module-structure`（$R=K[x]$），$V\cong\bigoplus_{i=1}^s K[x]/(d_i)$，其中 $d_1\mid\cdots\mid d_s$ 是非单位首一多项式；自由部分为零，因为 $V$ 挠。

> 续见 proofs/imp.rational-canonical-form-proof.2.md
