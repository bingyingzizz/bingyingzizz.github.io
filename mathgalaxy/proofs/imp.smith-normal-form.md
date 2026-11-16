# PID 上的 gcd 消元 $\implies$ Smith 标准形
`imp.smith-normal-form` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.equivalent-matrices` 相抵矩阵（等价矩阵） → `thm.smith-normal-form` Smith 标准形

**存在性**。若 $A = 0$ 取 $r = 0$。否则在 $A$ 的等价类中取一个矩阵 $B$，使 $(1,1)$ 元素 $a$ 生成的理想 $(a)$ 在包含关系下极大（PID 是 Noether 环，理想升链稳定，故这样的 $B$ 存在）。

> 续见 proofs/imp.smith-normal-form.2.md
