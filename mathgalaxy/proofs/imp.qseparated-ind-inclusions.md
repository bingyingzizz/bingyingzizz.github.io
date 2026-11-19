# imp.qseparated-ind-inclusions
`imp.qseparated-ind-inclusions` · 推出 · strong 边 · 根 `../`

`def.quasi-separated` 拟分离对象 + `def.condensed-set` 凝聚态集 + `def.chaus` 紧 Hausdorff 空间范畴 → `lem.qseparated-ind-inclusions` 拟分离即含入的滤过余极限

**证明。** 只需证正向（反向是定义）。
- 任何凝聚态集 $X$ 都能写成 $X \cong \varinjlim_{i} T_{i}$（$T_{i}$ 紧 Hausdorff）—— 这是 $\mathrm{Cond}$ 里「用紧块拼出来」的一般事实。
- 记 $X_{i}$ 为 $T_{i}$ 在 $X$ 中的**像**，则 $X = \varinjlim_{i} X_{i}$。

每个 $X_{i}$ 作为 $T_{i}$ 的像是**拟紧**的；

而 $X$ 拟分离，故每个 $X_{i}$ 也拟分离（拟分离沿子对象遗传）。

> 续见 proofs/imp.qseparated-ind-inclusions.2.md
