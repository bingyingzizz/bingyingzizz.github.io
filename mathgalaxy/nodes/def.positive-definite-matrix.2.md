# 正定矩阵　`def.positive-definite-matrix`　·　续页（第 2 页）
[在星图里打开](../#n=def.positive-definite-matrix)　·　第 1 页 [nodes/def.positive-definite-matrix.md](./def.positive-definite-matrix.md)

## 陈述（续）
把 $>$ 换成 $\ge$ 就得**半正定**。实对称矩阵的情形把 $x^{*}$ 换成 $x^{T}$。

**等价刻画**（前两条最常用）：
1. 所有特征值 $> 0$（半正定：$\ge 0$）；
2. 所有**顺序主子式** $> 0$（Sylvester 判据，`thm.sylvester-criterion`）；
3. 存在可逆 $P$ 使 $A = P^{*}P$（半正定：$A = P^{*}P$ 不必可逆）；
4. $x \mapsto \sqrt{x^{*}Ax}$ 是范数（半正定时是
半范数）。

> 续见 [nodes/def.positive-definite-matrix.3.md](./def.positive-definite-matrix.3.md)
