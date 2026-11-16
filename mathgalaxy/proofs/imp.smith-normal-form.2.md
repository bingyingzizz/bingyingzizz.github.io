# PID 上的 gcd 消元 $\implies$ Smith 标准形
`imp.smith-normal-form` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.equivalent-matrices` 相抵矩阵（等价矩阵） → `thm.smith-normal-form` Smith 标准形

先证 $a$ 整除 $B$ 的每个元素。若第一行有 $b$ 不被 $a$ 整除（设它在第 $j$ 列，$j \ge 2$），令 $d = \gcd(a, b)$，则 $(d) \supsetneq (a)$；由 Bézout 写 $d = u a + v b$，对**列**作可逆变换 $C_{1} \leftarrow u C_{1} + v C_{j}$、$C_{j} \leftarrow -\frac{b}{d} C_{1} + \frac{a}{d} C_{j}$（系数矩阵的行列式 $\frac{u a + v b}{d} = 1$，故整体可逆），它把 $(1,1)$ 换成 $u a + v b = d$，与 $(a)$ 的极大性矛盾。**这里必须动列**：$b$ 本来就在第一行，动行只能把第一行换成它自身的线性组合，清不掉 $b$。故 $a$ 整除第一行每个元素；同法（转置后动行）得 $a$ 整除第一列每个元素

> 续见 proofs/imp.smith-normal-form.3.md
