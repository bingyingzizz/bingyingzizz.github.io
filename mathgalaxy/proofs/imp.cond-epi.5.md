# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.free-projective` 自由紧 Haus 是投射对象 + `prop.chaus-quotient-of-free` 紧 Haus 是自由的商 → `prop.cond-epi` 凝聚态集满态射的判据

**注意**：不能把 $X(\coprod_i F_i)$ 直接当成 $X(F)$ —— 覆盖的联合映射一般不是同构，它只满。缺的那一步正是自由空间的投射性（引理 2），不是「有限不交并等于原空间」。

> 「满 = 局部满 = 局部可提升」是层论里的通用逻辑；而自由紧 Hausdorff 空间在 $\mathbf{CHaus}$ 中投射，所以有限覆盖上的提升可以沿截面拉回成整个 $F$ 上的提升 —— 这就是为什么探针只需要自由对象。
