# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

**第四步：唯一性（局部单射）。** 若 $f(x_1) = f(x_2) = y$ 且 $\|x_i\| \le r$，则 $\Phi(x_1) - \Phi(x_2) = (x_1 - x_2) - (f(x_1) - f(x_2)) = x_1 - x_2$，取范数得 $\|x_1 - x_2\| \le \frac{1}{2}\|x_1 - x_2\|$，故 $x_1 = x_2$。于是记 $V := B(0, r) \cap f^{-1}(B(0, r/2))$、$W := B(0, r/2)$，则 $f|_V : V \to W$ 是双射。（把 $V$ 取成开球与开原像之交，$V$、$W$ 都开。）

> 续见 proofs/imp.inverse-function.6.md
