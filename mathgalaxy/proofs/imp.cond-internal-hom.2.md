# imp.cond-internal-hom
`imp.cond-internal-hom` · 推出 · strong 边 · 根 `../`

`def.condensed-set` 凝聚态集 + `def.topos` 拓扑斯 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.hausdorff` Hausdorff 空间 → `prop.cond-internal-hom` 内部 Hom 的函数空间刻画

**证明。** 先设 $X = S$ 是紧 Hausdorff 空间（此时 $X(\bullet) = S$）。对任意紧 Hausdorff 的 $T$，两边在 $T$ 上取值并逐步用「内部 Hom 的伴随」与「紧生成空间上的指数律」：
$$\underline{\operatorname{Hom}}(S, \underline{Y})(T) = \operatorname{Hom}\bigl(T,\ \underline{\operatorname{Hom}}(S,\underline{Y})\bigr) \cong \operatorname{Hom}(T \times S,\ \underline{Y}) \cong C(T\times S,\ Y) \cong C\bigl(T,\ C(S, Y)\bigr) = \underline{C(X(\bullet), Y)}(T).$$
其中第四步是紧生成空间（$T \times S$ 与 $Y$）上的**指数律**。取 $T = \bullet$ 得自然变换；一般 $X$ 再用 Yoneda：对紧 Hausdorff 的 $S$，
$$\operatorname{Hom}(X, \underline{Y})(S) \cong \operatorname{Hom}(S, \

> 续见 proofs/imp.cond-internal-hom.3.md
