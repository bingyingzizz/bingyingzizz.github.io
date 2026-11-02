# 二阶偏导可交换 $\implies$ 括号是向量场且满足四条性质
`imp.mf-bracket-properties` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 → `def.lie-bracket` Lie 括号

**括号是向量场。** 在卡里，$X = \sum_{j}X^{j}\partial_{j}$、$Y = \sum_{i}Y^{i}\partial_{i}$，于是

$$[X,Y]f = \sum_{i,j}\Bigl(X^{j}\partial_{j}\bigl(Y^{i}\partial_{i}f\bigr) - Y^{i}\partial_{i}\bigl(X^{j}\partial_{j}f\bigr)\Bigr).$$

展开出四项，其中两项是 $X^{j}Y^{i}\,\partial_{j}\partial_{i}f$ 与 $-Y^{i}X^{j}\,\partial_{i}\partial_{j}f$。由于二阶偏导可交换，这两项逐项抵消，剩下

$$[X,Y]f = \sum_{i}\Bigl(\sum_{j}\bigl(X^{j}\partial_{j}Y^{i} - Y^{j}\partial_{j}X^{i}\bigr)\Bigr)\partial_{i}f ,$$

系数光滑、只含 $f$ 的一阶导，故 $[X,Y]$ 是光滑向量场，且上式就是它的坐标表达式。

**(1) 反称。** $[X,Y]f = X(Yf) - Y(Xf) = -\bigl(Y(Xf) - X(Yf)\bigr) = -[Y,X]f$，两边对一切 $f$ 相等即得。$[X,X] = 0$ 是特例。

> 续见 proofs/imp.mf-bracket-properties.2.md
