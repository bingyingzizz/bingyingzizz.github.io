# 同一套证明换到 Banach 空间（多一步 Neumann 级数）
`imp.inverse-function-banach` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `def.banach-space` Banach 空间 → `thm.inverse-function-banach` 逆映射定理（Banach 版）

证明「距恒等足够近的算子是拓扑同构」—— 级数的收敛性来自算子空间 $\mathcal{L}(F)$ 的完备性，这是 Banach 空间独有的工具，有限维里根本不需要（有限维自动完备）。有了它，就能把「$Df$ 在 $a$ 附近接近 $Df(a)$」升级成「$Df$ 在 $a$ 附近处处是拓扑同构」，从而**在整个邻域上**取逆。

其余各步（局部单射、逆的 Lipschitz 性、$Dg = (Df\circ g)^{-1}$、$C^{1}$ 性）与有限维逐字相同。∎

> ⭐ 有限维与无限维的差别浓缩成一句话：**有限维里「可逆」与「拓扑可逆」是同一件事，无限维里不是**。这条依赖边存在的意义就是把这句话钉在图上。
