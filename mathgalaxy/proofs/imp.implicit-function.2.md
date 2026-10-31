# 对 $\Phi(x,y) = (x, F(x,y))$ 用逆映射定理 $\implies$ 隐函数定理
`imp.implicit-function` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 → `thm.implicit-function` 隐函数定理

**第三步：用逆映射定理。** 存在 $(a, b)$ 的邻域 $\widetilde U$ 与 $(a, 0)$ 的邻域 $\widetilde W$，使 $\Phi|_{\widetilde U} : \widetilde U \to \widetilde W$ 是 $C^{1}$ 双射，逆记 $\Theta$，且 $D\Theta = (D\Phi)^{-1}$。

**第四步：逆必须有形状 $\Theta(x, z) = (x, \theta(x, z))$。** 因为 $\Phi$ 保持第一个分量不变（第一坐标就是 $x$），故 $\Theta$ 也保持第一分量不变。

> 续见 proofs/imp.implicit-function.3.md
