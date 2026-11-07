# 外微分　`prop.exterior-derivative-manifold`　·　说明
根 `../`

**引理 B（坐标公式满足公理）**：在 $U$ 上定义 $D(\sum_{I} a_{I}\,\mathrm{d}x^{I}) := \sum_{I}\mathrm{d}a_{I}\wedge\mathrm{d}x^{I}$。**证明**：(2) 显然。(1)：$Df = \sum_{i}\partial_{i}f\,\mathrm{d}x^{i}$，这正是 $f$ 的微分（$\mathrm{d}f_{p}(v) = v(f)$）。(3)：只需对单项 $a\,\mathrm{d}x^{I}$ 与 $b\,\mathrm{d}x^{J}$ 验，$D(ab\,\mathrm{d}x^{I}\wedge\mathrm{d}x^{J}) = (b\,\mathrm{d}a + a\,\mathrm{d}b)\wedge\mathrm{d}x^{I}\wedge\mathrm{d}x^{J} = (\mathrm{d}a\wedge\mathrm{d}x^{I})\wedge(b\,\mathrm{d}x^{J}) + (-1)^{k}a\,\mathrm{d}x^{I}\wedge(\mathrm{d}b\wedge\mathrm{d}x^{J}),$ 中间用了 $\mathrm{d}x^{I}\wedge\mathrm{d}b = (-1)^{k}\mathrm{d}b\wedge\mathrm{d}x^{I}$。(4)：先看函数，$D^{2}f = \sum_{i}D(\partial_{i}f)\wedge\mathrm{d}x^{i} = \sum_{i,j}\partial_{j}\partial_{i}f\,\mathrm{d}x^{j}\wedge\mathrm{d}x^{i} = 0$，因为 $\mathrm{d}x^{j}\wedge\ma

> 续见 notes/prop.exterior-derivative-manifold.4.md
