# 带余除法 $\implies$ 唯一分解
`imp.poly-ufd` · 推出 · strong 边 · 根 `../`

`thm.division-algorithm` 带余除法 → `thm.poly-ufd` K[x] 是唯一分解整环

左端两项都被 $p$ 整除（第一项显然，第二项因为 $p \mid fg$），故 $p \mid g$。

**第三步：存在性。** 对 $\deg f$ 归纳：若 $f$ 不可约则已分解完；否则 $f = gh$ 且 $\deg g, \deg h < \deg f$，对两者归纳。

**第四步：唯一性。** 设 $p_1 \cdots p_r = q_1 \cdots q_s$（都是不可约元，首一化后）。

由 $p_1 \mid q_1 \cdots q_s$ 与第二步，存在某个 $j$ 使 $p_1 \mid q_j$；

两者都不可约（从而相伴），约掉后对 $r + s$ 归纳，得 $r = s$ 且分解在顺序与单位之下相同。

∎

> 四步里**只有第二步用了域的特殊性**（本质上是带余除法给出的 Bézout 等式）；其余三步对任何整环都成立。这也是「欧几里得整环 $\implies$ UFD」这条链的标准证明。
