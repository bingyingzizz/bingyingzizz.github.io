# 预层范畴完备 $\implies$ 任意函子诱导拓扑斯态射
`imp-link.kanex-indtop` · 推出 · strong 边 · 根 `../`

`prop.kan-extension-exists` 有余极限时 Kan 延拓总存在 + `thm.presheaf-limits-colimits` 预层范畴的极限与余极限 → `thm.induced-topos-morphism` 任意函子诱导拓扑斯态射

由「预层范畴的极限与余极限逐点算」，$\widehat{\mathcal{C}}$ 与 $\widehat{\mathcal{C}'}$ 都有所有小极限与小余极限 ✓。
于是对 $\hat{g}^{-1} = (-) \circ g^{\mathrm{op}}$ 沿 $g$ 的左、右 Kan 延拓都存在（由「有余极限时 Kan 延拓总存在」）✓，也即 $\hat{g}^{-1}$ 既有左伴随 $\hat{g}_{!}$ 又有右伴随 $\hat{g}_{*}$ ✓。
再看正合性：$\hat{g}^{-1}$ 是**右**伴随（它左边站着 $\hat{g}_{!}$），右伴随保所有极限 ✓，所以 $\hat{g}^{-1}$ 保有限极限，即左正合 ✓。
于是按拓扑斯态射的定义，$(\hat{g}^{-1} \dashv \hat{g}_{*})$ 连同 $\hat{g}^{-1}$ 的左正合性给出态射 $\hat{g} : \widehat{\mathcal{C}} \to \widehat{\mathcal{C}'}$ ✓。∎
