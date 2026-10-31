# $\mathrm{d}^{2}=0$ 给出两条结构方程
`imp.dg-struct` · 推出 · strong 边 · 根 `../`

`def.moving-frame` 活动标架 + `def.connection-form` 联络形式 → `thm.structure-equations` 结构方程

故 $\mathrm{d}\omega^{j}_{\ i} = \sum_{k}\omega^{k}_{\ i}\wedge\omega^{j}_{\ k}$；改换指标得 $\mathrm{d}\omega^{i}_{\ j} = \sum_{k}\omega^{k}_{\ j}\wedge\omega^{i}_{\ k}$。由 $1$-形式反交换，这等于 $\mathrm{d}\omega^{i}_{\ j} = -\sum_{k}\omega^{i}_{\ k}\wedge\omega^{k}_{\ j}$，即曲率形式 $\Omega^{i}_{\ j} := \mathrm{d}\omega^{i}_{\ j}+\sum_{k}\omega^{i}_{\ k}\wedge\omega^{k}_{\ j}$ 恒为零。∎

⭐ 反过来也是同一件事：能构造出标架的**唯一**障碍就是这个 $\mathrm{d}^{2}=0$（曲面论基本定理用的就是这一点）。
