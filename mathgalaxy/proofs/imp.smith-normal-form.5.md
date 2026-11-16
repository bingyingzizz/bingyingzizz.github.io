# PID 上的 gcd 消元 $\implies$ Smith 标准形
`imp.smith-normal-form` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.equivalent-matrices` 相抵矩阵（等价矩阵） → `thm.smith-normal-form` Smith 标准形

**唯一性**。对 $k \ge 1$，令 $\Delta_k$ 为 $A$ 的全部 $k$ 阶子式的最大公因子（$\Delta_0 := 1$）。左乘或右乘可逆矩阵只把 $k$ 阶子式乘上可逆元，故 $\Delta_k$ 在相抵下不变。而 $\operatorname{diag}(d_1, \ldots, d_r, 0)$ 的 $k$ 阶子式（$k \le r$）的非零值只有 $d_{i_1} \cdots d_{i_k}$，由整除链其最大公因子为 $d_1 \cdots d_k$。于是 $d_k = \Delta_k / \Delta_{k-1}$ 由 $A$ 唯一决定（相差单位）。∎

> 关键一步是在等价类中取 $(1,1)$ 理想极大的矩阵；PID 的 Noether 性保证它存在。
