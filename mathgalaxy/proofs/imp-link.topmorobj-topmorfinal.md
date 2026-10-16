# 对象给出的拓扑斯态射 $\implies$ 终映射的情形
`imp-link.topmorobj-topmorfinal` · 推出 · strong 边 · 根 `../`

`prop.topos-morphism-from-object` 对象给出拓扑斯态射 + `prop.constant-sheaf-top` 拓扑空间上的常层就是离散空间的层 → `prop.topos-morphism-final-map` 终映射给出的拓扑斯态射

取 $X \in \mathbf{Top}$ 与到单点的映射 $p : X \to \mathbf{1}$ ✓。沿 $p$ 的推前就是「在 $X$ 上取整体截面」$p_{*}\mathcal{F} = \Gamma(X, \mathcal{F})$ ✓；拉回把集合 $E$ 送到 $X$ 上的常层 $p^{-1}E = \widetilde{E}_{X}$ ✓（常层就是离散空间给出的层）。
再对连续映射 $f : Y \to X$ 用「拉回关于复合相容」：$q = p \circ f$ 给出 $\widetilde{E}_{Y} = q^{-1}E = f^{-1}p^{-1}E = f^{-1}\widetilde{E}_{X}$ ✓。∎
