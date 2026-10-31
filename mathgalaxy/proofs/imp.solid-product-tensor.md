# 幺半性 + $C(S)\otimes C(T) = C(S\times T)$ $\implies$ 乘积公式
`imp.solid-product-tensor` · 推出 · strong 边 · 根 `../`

`thm.solid-tensor` 固态张量积 + `thm.csz-free` 连续函数群是自由的 → `prop.solid-product-tensor` 大乘积的固态张量积

写 $M = \operatorname{Hom}(M',\mathbb{Z})$、$N = \operatorname{Hom}(N',\mathbb{Z})$（$M', N'$ 自由）。要证

$$\operatorname{Hom}(M',\mathbb{Z}) \otimes^{L\blacksquare} \operatorname{Hom}(N',\mathbb{Z}) \cong \operatorname{Hom}(M' \otimes N',\ \mathbb{Z}).$$

把 $M'$、$N'$ 分别写成 $C(S,\mathbb{Z})$、$C(T,\mathbb{Z})$ 的收缩（`thm.csz-free`），归约到 $M' = C(S,\mathbb{Z})$、$N' = C(T,\mathbb{Z})$。此时 $M' \otimes N' = C(S \times T,\mathbb{Z})$，命题变成

$$Z[S]^{\blacksquare} \otimes^{L\blacksquare} Z[T]^{\blacksquare} \cong Z[S \times T]^{\blacksquare},$$

即 `thm.solid-tensor` 的幺半性。$\blacksquare$
