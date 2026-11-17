# 自同态环是局部环　`lem.endomorphism-local`　·　说明
根 `../`

由 cor.indecomposable-endomorphism，每个 $f\in\operatorname{End}_A(V)$ 或为自同构或幂零，特别地「非单位 = 幂零」。
幂零元对加法封闭（不假设交换）：设 $f,g$ 幂零。若 $f+g$ 可逆，令 $u=(f+g)^{-1}g$。若 $u$ 可逆，则 $g=(f+g)u$ 可逆，与 $g$ 幂零矛盾；故 $u$ 非单位，由 cor 得 $u$ 幂零。于是 $\operatorname{id}-u$ 可逆；而 $(f+g)^{-1}f=\operatorname{id}-u$，故 $f=(f+g)(\operatorname{id}-u)$ 可逆，与 $f$ 非单位矛盾。因此 $f+g$ 非单位，再由 cor 得幂零。
幂零元构成理想：对任意 $h$，若 $hf$ 可逆则 $f$ 有左逆，有限维下 $f$ 可逆，矛盾；故 $hf$ 非单位、幂零；$fh$ 同理。
于是幂零元是双边理想；商环的每个非零元可逆，故商是除法环。这给出局部环，极大理想正是幂零元全体。
