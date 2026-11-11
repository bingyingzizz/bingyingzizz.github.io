# 光滑单位分解把局部内积拼成整体内积
`dep.mf-bundlemetric-pu` · 推出 · strong 边 · 根 `../`

`thm.smooth-partition-unity` 光滑单位分解 → `prop.bundle-metric` 纤维度量

取 $E$ 的局部平凡化覆盖 $\{U_{\alpha}\}$，在每个 $U_{\alpha}$ 上借平凡化取标准内积 $\langle\cdot,\cdot\rangle_{\alpha}$。
由 `thm.smooth-partition-unity`（流形仿紧，故存在从属于 $\{U_{\alpha}\}$ 的光滑单位分解 $\{\rho_{\alpha}\}$）令 $\langle s,t\rangle := \sum_{\alpha}\rho_{\alpha}\langle s,t\rangle_{\alpha}$。
每一项 $\rho_{\alpha}\langle\cdot,\cdot\rangle_{\alpha}$ 在 $U_{\alpha}$ 外为 $0$，故和局部有限、光滑、双线性、对称；正定性：$\langle s,s\rangle = \sum\rho_{\alpha}\langle s,s\rangle_{\alpha} \ge 0$，且若 $s(x) \ne 0$ 则某 $\alpha$ 有 $\rho_{\alpha}(x) > 0$、$\langle s(x),s(x)\rangle_{\alpha} > 0$，故和 $> 0$。∎

> 局部内积做凸组合，权重就是这个光滑单位分解；正定性靠「权重非负且和为 $1$」。
