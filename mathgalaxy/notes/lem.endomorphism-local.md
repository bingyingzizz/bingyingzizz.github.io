# 自同态环是局部环　`lem.endomorphism-local`　·　说明
根 `../`

由 cor.indecomposable-endomorphism，非自同构的 $f$ 必幂零，故非单位恰为幂零元。
若 $f$ 幂零则 $\operatorname{id}-f$ 可逆（逆为有限几何级数）；故幂零元对加法封闭：若 $f,g$ 幂零且 $f+g$ 可逆，则 $f=(f+g)(\operatorname{id}-(f+g)^{-1}g)$ 可逆（$g$ 幂零，括号可逆），矛盾；故 $f+g$ 非单位，再由 cor.indecomposable-endomorphism 得幂零。
于是幂零元构成双边理想，商是除法环，这给出局部环；反过来，若 $f$ 不可逆则幂零，故极大理想正是幂零元全体。
