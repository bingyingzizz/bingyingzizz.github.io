# 对子空间维数归纳延拓等距
`imp.witt-extension` · 推出 · strong 边 · 根 `../`

`def.isometry` 等距与正交变换 + `def.orthogonal-complement` 正交补 + `def.isotropic-vector` 迷向向量 + `lem.equal-norm-isometry` 等长向量由反射互达 → `lem.witt-extension` Witt 延拓引理

对 $\dim A$ 归纳。$\dim A=0$ 时取恒等。设 $\dim A>0$。

**取非迷向向量。** 若 $q(a)=0$ 对一切 $a\in A$ 成立，则极化恒等式给 $2\beta(x,y)=q(x+y)-q(x)-q(y)=0$，即 $\beta$ 在 $A$ 上恒为零，与 $A$ 非退化矛盾（$\operatorname{char}K\ne2$）。故存在 $a\in A$ 使 $q(a)\ne0$。令 $A_0=a^{\perp}\cap A$。由 $q(a)\ne0$ 得 $A=A_0\perp\operatorname{span}(a)$。

> 续见 proofs/imp.witt-extension.2.md
