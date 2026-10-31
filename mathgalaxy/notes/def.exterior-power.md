# 外幂　`def.exterior-power`　·　说明
根 `../`

⭐ 几何含义：$\dim V = n$ 时 $\bigwedge^{n} V$ 是**一维**的，而 $v_1 \wedge \cdots \wedge v_n$ 正是「这 $n$ 个向量张成的平行体的有向体积」——它的系数就是行列式。

⭐ 交错性是「商掉」实现的：$v \wedge v = 0$（把 $v \otimes v$ 送进商），这正是 `def.alternating-form` 那一条里「两个变元相等则为零」。

⚠ 特征 $2$ 的域里 $v \wedge w = -w \wedge v$ 与 $v \wedge w = w \wedge v$ 是同一句话（$-1 = 1$），交错与对称不再可分。本图默认 $\operatorname{char} K \ne 2$。
