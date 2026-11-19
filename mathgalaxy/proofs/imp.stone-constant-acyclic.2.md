# imp.stone-constant-acyclic
`imp.stone-constant-acyclic` · 推出 · strong 边 · 根 `../`

`def.condensed-set` 凝聚态集 + `def.cech-complex` Čech 复形 + `def.cech-cohomology` Čech 上同调 + `def.chaus` 紧 Hausdorff 空间范畴 → `lem.stone-constant-acyclic` Stone 上常系数零调

**证明（先有限、再取逆极限）。** 由「无环 $\iff$ Čech 上同调为零」，只需对 Stone 空间之间的**满射** $f : S_{0} \twoheadrightarrow S$ 证明增广 Čech 复形 $\check{C}^{\bullet}\bigl((S_{0}\to S)^{+}, M\bigr)$ 零调（有限**不交**覆盖那情形由「有限不交覆盖的高次 Čech 为零」给出）。
- **$S, S_{0}$ 有限的情形**：此时它们是有限离散集，$f$ 是有限满射，增广 Čech 复形是**零伦**的（有截面的态射那条），故零调。
- **一般情形**：Stone 空间是**投射有限空间**的滤过逆极限，写 $S_{0} = \varprojlim_{k} S_{0,k}$（$S_{0,k}$ 有限），记 $S_{k}$ 为 $S_{0,k}$ 在 $S$ 里的像。$M$ **离散**，于是交叠上的连续函数就是逐块给定的，而逆极限的取

> 续见 proofs/imp.stone-constant-acyclic.3.md
