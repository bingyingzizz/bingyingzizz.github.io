# 上链复形的低次项 $\implies$ 一维上同调就是交叉同态模主交叉同态
`imp.h1-crossed` · 推出 · strong 边 · 根 `../`

`def.group-cohomology` 群上同调 + `def.bar-resolution` 标准消解 → `thm.h1-crossed` 一维上同调与交叉同态

**第四步：$B^{1} \subseteq Z^{1}$。** 这是 $\delta^{1}\delta^{0} = 0$ 的展开，也可直接验：$d_{m}(g_{1}g_{2}) = g_{1}g_{2}m - m$，而 $d_{m}(g_{1}) + g_{1}d_{m}(g_{2}) = (g_{1}m - m) + (g_{1}g_{2}m - g_{1}m) = g_{1}g_{2}m - m$，相等。

于是 $H^{1}(G, M) = \ker\delta^{1}/\operatorname{im}\delta^{0} = Z^{1}(G,M)/B^{1}(G,M)$。∎

> 一维上同调的分类含义不是外加的，是把标准复形第 $1$、$2$ 项写出来的直接结果。
