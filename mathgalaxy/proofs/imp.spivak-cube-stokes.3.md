# 逐项积完一元导数 $\implies$ 方块上的 Stokes 公式
`imp.spivak-cube-stokes` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 + `def.exterior-derivative` 外微分 → `lem.single-cube-stokes` 方块上的 Stokes 公式

最后一步用 $(-1)^{i+\alpha+i-1} = (-1)^{\alpha+1}$：$\alpha = 1$ 给 $+1$、$\alpha = 0$ 给 $-1$。

**（4）比较。** 两式逐项相同，故 $\int_{I^{k}}\mathrm{d}\eta = \int_{\partial I^{k}}\eta$。∎

⭐ 全部内容就是「每个 $j$ 的两端之差」被数了两遍，两遍的符号对上。$k = 1$ 时退化成 $\int_{0}^{1}F^{\prime} = F(1)-F(0)$，可以当作符号约定是否抄对的检验。
