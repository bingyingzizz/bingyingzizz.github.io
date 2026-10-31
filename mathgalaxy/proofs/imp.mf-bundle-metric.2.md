# 局部内积做凸组合 $\implies$ 每个向量丛都有纤维度量
`imp.mf-bundle-metric` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `thm.smooth-partition-unity` 光滑单位分解 → `prop.bundle-metric` 纤维度量

$$\langle s,t\rangle_{p} := \sum_{\alpha}\rho_{\alpha}(p)\,\bigl\langle s(p), t(p)\bigr\rangle_{\alpha} .$$

每点附近只有有限项非零，故和有意义且对 $p$ 光滑。逐条验证：

- **双线性**：每个 $\langle\cdot,\cdot\rangle_{\alpha}$ 双线性、系数为常数（对固定的 $p$），故线性组合双线性；
- **对称**：每项对称；
- **正定**：$\langle s,s\rangle_{p} = \sum_{\alpha}\rho_{\alpha}(p)\lVert\cdot\rVert^{2}_{\alpha} \ge 0$；等号成立需每个 $\rho_{\alpha}(p) > 0$ 对应的项都为零。因 $\sum_{\alpha}\rho_{\alpha}(p) = 1$，至少一个 $\rho_{\alpha}(p) > 0$，而那一项 $\lVert s\rVert_{\alpha} = 0$ 迫使 $s = 0$。

> 续见 proofs/imp.mf-bundle-metric.3.md
