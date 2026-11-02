# $(1,1)$ 型缩并就是取迹
`imp.derived-trace-from-contraction` · 推出 · strong 边 · 根 `../`

`def.tensor-contraction` 缩并 → `def.trace` 迹

取 $(1,1)$ 型张量场 $T$（$r = s = 1$），缩并 $\mathrm{C}^{1}_{\,1}T$ 是 $(0,0)$ 型 —— 一个函数。在卡里它是

$$\bigl(\mathrm{C}^{1}_{\,1}T\bigr)_{p} = \sum_{a=1}^{n} T^{a}_{\ a}.$$

**它就是迹。** 把 $T$ 在某点的分量写成矩阵 $A = (T^{i}_{\ j})$（第 $i$ 行是上标、第 $j$ 列是下标），则上式正是 $\sum_{a} A_{aa} = \operatorname{tr} A$。所以「缩并」在 $r = s = 1$ 这一格上退化成取迹。

> 续见 proofs/imp.derived-trace-from-contraction.2.md
