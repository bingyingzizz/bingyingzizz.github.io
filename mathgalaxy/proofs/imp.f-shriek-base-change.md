# 仿射情形 + 基变换
`imp.f-shriek-base-change` · 推出 · strong 边 · 根 `../`

`prop.f-shriek-base-change` 对偶函子的扭转与基变换 + `thm.za-analytic` 有限生成代数的解析环 → `prop.f-shriek-base-change` 对偶函子的扭转与基变换

一切局部化良好，归约到 $f : R \to A$ 是 $A = R[T]$ 或 $f$ 满射两种情形。

**$f$ 满射。** $f_! = f_*$ 是遗忘函子，$f^! = \operatorname{RHom}_R(A,-)$；有限 Tor 维数使 $A$ 是 $R$ 上的 perfect 复形，于是

$$f^! = \operatorname{RHom}_R(A, R) \otimes^{L}_{R_\blacksquare} f^*,$$

而 $\operatorname{RHom}_R(A,R)$ 与平坦基变换交换。

**$A = R[T]$。** $f_!M = M \otimes_{(A,R)_\blacksquare} R((T^{-1}))/R[T][-1]$，$f^!R = R[T][1]$；基变换就是 $R((T^{-1}))/R[T]$ 的基变换。$\blacksquare$
