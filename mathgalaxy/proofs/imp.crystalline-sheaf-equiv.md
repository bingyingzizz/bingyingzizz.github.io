# imp.crystalline-sheaf-equiv
`imp.crystalline-sheaf-equiv` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.crystalline-sheaf` 晶体层 + `def.sheaf` 层 + `def.category-of-topological-spaces` 拓扑空间范畴 → `prop.crystalline-sheaf-equiv` 晶体层就是 X 上的层

**证明的思路。** 从晶体层到 $X$ 上的层是「取 $Y = X$ 那份数据」✓；反方向把 $X$ 上的层 $\mathcal{F}$ 送到 $\mathbf{Top}_{/X}$ 上的层 $\mathcal{F}_{Y} := f^{-1}\mathcal{F}$（$f : Y \to X$）✓ —— 这时过渡 $\alpha_f$ 自动是同构，所以落在晶体层里 ✓。

两个方向互逆 ✓。

(2) 是 (1) 加上「$X$ 上的层范畴 $\simeq$ étale 空间范畴」这条标准等价 ✓。

∎

> 证明只给「$Y=X$ 取数据」的构造思路；两个函子互逆的自然同构与过渡同构 $\alpha_f$ 的验证未逐步展开。
