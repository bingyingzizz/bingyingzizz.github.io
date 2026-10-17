# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

记 $A := Df(a)$，$b := f(a)$。

**第一步：化归到 $a = 0$、$b = 0$、$Df(0) = I$。** 令 $\widetilde f(x) := A^{-1}\bigl( f(a + x) - b \bigr)$。则 $\widetilde f(0) = 0$、$D\widetilde f(0) = A^{-1}A = I$，而 $f$ 的局部可逆性与逆的光滑性等价于 $\widetilde f$ 的。以下就设 $a = 0$、$f(0) = 0$、$Df(0) = I$。

> 续见 proofs/imp.inverse-function.2.md
