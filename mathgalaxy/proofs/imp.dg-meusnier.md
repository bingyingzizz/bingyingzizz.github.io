# 法曲率的定义 $\implies$ Meusnier 定理
`imp.dg-meusnier` · 推出 · strong 边 · 根 `../`

`def.normal-curvature` 法曲率 + `def.second-fundamental-form` 第二基本形式 → `thm.meusnier` Meusnier 定理

设 $\gamma$ 单位速、$\gamma(0) = p$，记 $V := \gamma'(0) \in T_{p}S$。由 $\langle \gamma', n\rangle = 0$ 求导：

$$0 = \langle \gamma'', n\rangle+\langle \gamma', \mathrm{d}n(\gamma')\rangle \implies \langle \gamma'', n\rangle = -\langle V, \mathrm{d}n(V)\rangle = II(V,V).$$

又 $k = \lVert \gamma''\rVert$、$N_{\gamma} = \gamma''/k$，故 $\langle \gamma'', n\rangle = k\langle N_{\gamma}, n\rangle = k\cos\theta$。与 $II(V,V) = k_{n}(V)$（单位速，故 $I$ 的归一化因子为 $1$）比较，得 $k_{n}(V) = k\cos\theta$。∎
