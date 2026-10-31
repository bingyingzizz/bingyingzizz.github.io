# 二阶偏导可交换 $\implies$ 括号是向量场且满足四条性质
`imp.mf-bracket-properties` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 → `def.lie-bracket` Lie 括号

**(2) 双线性。** 每一项都线性，直接读定义。

**(3) Jacobi。** 六项按 $X,Y,Z$ 排队，每个形如 $X(Y(Zf))$ 的二阶项出现两次、符号相反；三阶项 $XYZf$ 出现六次、符号 $+-+-+-$ 恰好抵消。所以和为零。

**(4) Leibniz。** $[X,fY]g = X(fYg) - fY(Xg) = (Xf)(Yg) + fX(Yg) - fY(Xg) = (Xf)(Yg) + f[X,Y]g$，即 $[X,fY] = (Xf)Y + f[X,Y]$。再对第一个变元用反称得 $[fX,gY] = fg[X,Y] + f(Xg)Y - g(Yf)X$。∎

⭐ 全部证明只用了一条：二阶偏导可交换。所以 Lie 括号的存在性是「$\mathbb{R}^{n}$ 的微积分是交换的」这一事实的几何痕迹。
