# imp.endomorphism-local
`imp.endomorphism-local` · 推出 · strong 边 · 根 `../`

`prop.fitting-decomposition` Fitting 分解 + `cor.indecomposable-endomorphism` 不可分解表示的自同态 → `lem.endomorphism-local` 自同态环是局部环

由 cor.indecomposable-endomorphism，每个 $f\in\operatorname{End}_A(V)$ 或为自同构或幂零，故「非单位 = 幂零」。
非交换地证加法封闭：设 $f,g$ 幂零且 $f+g$ 可逆，令 $u=(f+g)^{-1}g$。若 $u$ 可逆，则 $g=(f+g)u$ 可逆，矛盾；故 $u$ 非单位，由 cor 得 $u$ 幂零。于是 $\operatorname{id}-u$ 可逆；而 $(f+g)^{-1}f=\operatorname{id}-u$，故 $f=(f+g)(\operatorname{id}-u)$ 可逆，矛盾。因此 $f+g$ 非单位，再由 cor 得幂零。
理想性：对任意 $h$，$hf$ 非单位（否则 $f$ 有左逆，有限维下可逆），故 $hf$ 幂零；$fh$ 同理。于是幂零元是双边理想，商为除法环，$\operatorname{End}_A(V)$ 是局部环，极大理想为幂零元全体。$\blacksquare$
